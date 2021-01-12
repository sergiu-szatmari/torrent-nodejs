import { INodeId, Message } from '../models/torrent';
import net, { Socket } from 'net';

export class NetworkSender {

    constructor() { }

    public static async sendMessage(node: INodeId, message: Message): Promise<Message> {
        return new Promise((onResolve, onReject) => {
            const client = new Socket();
            client.connect({
                port: node.port!,
                host: node.host!
            });

            client.on('error', (err: Error) => {
                console.log(`Cannot send ${ Message.Type[ message.type! ] } to ${ node.owner }-${ node.index }`);
                onReject(err);
            });

            client.on('connect', () => {
                const bytes: Uint8Array = Message.encode(message).finish();
                const contentLength = Buffer.alloc(4);
                contentLength.writeInt32BE(bytes.length);

                console.log(`Sending ${ Message.Type[ message.type ] } to ${ node.owner }-${ node.index }`);

                let entireData: Buffer, dataLength: number;
                client.on('data', (data: Buffer) => {
                    if (!entireData) {
                        dataLength = data.readInt32BE(0);
                        data = data.slice(4);
                    }

                    if (data.byteLength > 0) entireData = !entireData ? data : Buffer.concat([ entireData, data ]);

                    if (!entireData || entireData.byteLength < dataLength) return;
                    entireData = entireData.slice(0, dataLength);

                    try {
                        const message = Message.decode(entireData);
                        console.log(`Received ${ Message.Type[ message.type ] } from ${ node.owner }-${ node.index }`);
                        onResolve(message);
                    } catch (err) {
                        console.log(`Cannot decode message`);
                        console.log(`Buffer: ${ data }`);
                        onReject(err);
                    } finally {
                        client.end();
                    }
                });

                const toWrite = Buffer.concat([ contentLength, bytes ]);
                client.write(toWrite);
            });
        });
    }

    public static async sendResponse(client: Socket, message: Message) {
        return new Promise((onResolve, onReject) => {
            client.on('error', (err: Error) => {
                console.log(`Cannot send response ${ Message.Type[ message.type ] }: ${ err.message }`);
                onReject(err);
            });

            const bytes: Uint8Array = Message.encode(message).finish();
            const contentLength = Buffer.alloc(4);
            contentLength.writeInt32BE(bytes.length);

            const toWrite = Buffer.concat([ contentLength, bytes ]);
            client.write(toWrite, () => {
                client.end();
                onResolve(null);
            });
        });
    }
}
