import { Message, NodeId, RegistrationRequest } from './models/torrent';
import { NetworkListener } from './network/network-listener';
import { Socket } from 'net';
import { Constants } from './utils/constants';
import { RequestHandler } from './handlers/request-handler';
import { RegistrationHandler } from './handlers/registration';
import { FileData } from './models/app-model';
import { UploadHandler } from './handlers/upload';
import { ChunkHandler } from './handlers/chunk';
import { ReplicateHandler } from './handlers/replicate';
import { LocalSearchHandler } from './handlers/local-search';
import { SearchHandler } from './handlers/search';
import { DownloadHandler } from './handlers/download';

export class Application {
    hub: NodeId;
    files = new Map<string, FileData>();
    requestHandlers: RequestHandler[] = [
        new RegistrationHandler(this),
        new UploadHandler(this),
        new ChunkHandler(this),
        new ReplicateHandler(this),
        new LocalSearchHandler(this),
        new SearchHandler(this),
        new DownloadHandler(this),
    ];

    constructor(hubIP: string, hubPort: number, public port: number, public index: number) {
        this.hub = NodeId.create({
            host: hubIP,
            port: hubPort,
            owner: 'hub',
            index: 1,
        });
    }

    public run() {
        this.networkListenerInit();
    }

    private networkListenerInit() {
        const listener = new NetworkListener(this.port);

        listener.on('network-message', async (socket: Socket, message: Message) => {
            try {
                await this.onMessage(message, socket);
            } catch (err) {
                console.error(err);
                console.log(`Cannot handle message: ${ err?.message ?? err?.toString() }`);
                try {
                    socket?.end();
                } catch (error) { }
            }
        });
        listener.on('listening', this.registerToHub);
    }

    /* Network listener handlers */
    private async onMessage(message: Message, socket?: Socket) {
        let handled = false;
        for (const handler of this.requestHandlers) {
            if (handler.canHandle(message)) {
                await handler.handle(message, socket);
                handled = true;
                break;
            }
        }

        if (!handled) {
            console.log(`Message type not supported (${ Message.Type[ message.type ]})`);
            socket?.end();
        }
    }

    private registerToHub = async () => {
        const message = Message.create({
            type: Message.Type.REGISTRATION_REQUEST,
            registrationRequest: RegistrationRequest.create({
                owner: Constants.OWNER,
                index: this.index,
                port: this.port
            })
        });
        return this.onMessage(message);
    }
    /* -- Network listener handlers -- */
}
