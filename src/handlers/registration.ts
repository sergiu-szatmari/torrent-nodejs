import { RequestHandler } from './request-handler';
import { Application } from '../application';
import { Message, Status } from '../models/torrent';
import { Socket } from 'net';
import { NetworkSender } from '../network/network-sender';

export class RegistrationHandler extends RequestHandler {

    constructor(app: Application) {
        super(app, Message.Type.REGISTRATION_REQUEST);
    }

    async handle(message: Message, socket?: Socket): Promise<void> {
        try {
            const response = await NetworkSender.sendMessage(this.app.hub, message);
            const { registrationResponse } = response;

            if (registrationResponse?.status !== Status.SUCCESS) {
                console.log(`Hub registration error: ${ registrationResponse?.errorMessage }`);
                process.exit(1);
            }
        } catch (err) {
            process.exit(1);
        }
    }
}
