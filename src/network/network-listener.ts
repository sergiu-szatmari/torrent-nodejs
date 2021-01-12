import net, { AddressInfo, Server, Socket } from 'net';
import { Constants } from '../utils/constants';
import { Utils } from '../utils/general-utils';
import { Message } from '../models/torrent';

export class NetworkListener {
    private listeners: { event: string, callback: (...args: any) => void }[] = [];
    private server?: Server;

    constructor(private port: number) {
        this.createServer();
    }

    // Function definitions for the method "on"
    public on(event: 'network-message', callback: (socket: Socket, message: Message) => Promise<void>): void;
    public on(event: 'listening', callback: (socket: Socket) => Promise<void>): void;

    // Function implementation for the method "on"
    public on(event: string, callback: (socket: Socket, ...args: any) => Promise<void>) {
        this.listeners.push({ event, callback });
    }

    private async notifyListeners(event: string, ...args: any) {
        for (const listener of this.listeners) {
            if (listener.event === event) {
                await listener.callback(...args);
            }
        }
    }

    private createServer() {
        this.server = net.createServer();

        this.server.on('close', this.onClose);
        this.server.on('error', this.onError);
        this.server.on('listening', this.onListen);
        this.server.on('connection', this.onConnection);
        this.server.maxConnections = 1000;
        this.server.listen(this.port);
    }

    /* Socket handlers */
    private onClose = () => {
        console.log('Connection closed');
    }

    private onError = (err: Error) => {
        console.log(`Socket error`);
        console.error(err);
    }

    private onListen = () => {
        const address = this.server?.address() as AddressInfo;
        const { port } = address;
        console.log(`Socket listening on port ${ port }`);

        this.notifyListeners('listening').then();
    }

    private onConnection = (socket: Socket) => {
        socket.setTimeout(Constants.TIMEOUT, () => this.onSocketTimeout(socket));

        let entireData: Buffer;
        let dataLength: number;
        socket.on('data', (data: Buffer) => {
            if (!dataLength) {
                // Reading data len
                dataLength = data.readInt32BE(0);
                data = data.slice(4);
            }

            // -> first time receiving data then set data
            // -> else concat data to other data received
            if (data.byteLength > 0) entireData = !entireData ? data : Buffer.concat([ entireData, data ]);

            if (!entireData || entireData.byteLength < dataLength) return;
            entireData = entireData.slice(0, dataLength);

            try {
                const message = Message.decode(entireData);
                this.notifyListeners('network-message', socket, message).then();
            } catch (err) {
                console.log(`Cannot decode message, buffer: `);
                console.log(data);
            }
        });
    }

    private onSocketTimeout = (socket: Socket) => {
        const { ip, port } = Utils.extractSocketData(socket);
        console.log(`Timeout for client ${ ip }:${ port }`);
        socket.end();
    }
    /* -- Socket handlers -- */
}
