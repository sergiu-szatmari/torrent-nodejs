import { Application } from '../application';
import { Message } from '../models/torrent';
import { Socket } from 'net';

export abstract class RequestHandler {
    constructor(protected app: Application, private type: Message.Type) { }

    public canHandle(message: Message): boolean {
        return message.type === this.type;
    }

    abstract handle(message: Message, socket?: Socket): Promise<void>;
}
