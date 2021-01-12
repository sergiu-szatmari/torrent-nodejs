import { RequestHandler } from './request-handler';
import { Application } from '../application';
import { IFileInfo, ILocalSearchResponse, Message, Status } from '../models/torrent';
import { Socket } from 'net';
import { NetworkSender } from '../network/network-sender';
import { FileData } from '../models/app-model';

export class LocalSearchHandler extends RequestHandler {

    constructor(app: Application) {
        super(app, Message.Type.LOCAL_SEARCH_REQUEST);
    }


    async handle(message: Message, socket: Socket): Promise<void> {
        // Helper function to send response to node
        const sendResponse = async (response: ILocalSearchResponse) => {
            await NetworkSender.sendResponse(socket, Message.create({
                type: Message.Type.LOCAL_SEARCH_RESPONSE,
                localSearchResponse: response
            }));
        };

        const localSearchRequest = message.localSearchRequest!;
        let regex: RegExp;

        try {
            // Validate regex
            if (!localSearchRequest.regex) throw new Error();
            regex = new RegExp(localSearchRequest.regex);
        } catch (err) {
            await sendResponse({
                status: Status.MESSAGE_ERROR,
                errorMessage: 'Invalid / empty regExp'
            });
            return;
        }

        try {
            console.info(`[ LocalSearchRequest ] Searching locally using regex "${ localSearchRequest.regex }"`);
            const foundFiles: IFileInfo[] = [];
            this.app.files.forEach((file) => {
                if (regex.test(file.fileInfo.filename!)) {
                    foundFiles.push(file.fileInfo);
                }
            });

            await sendResponse({
                status: Status.SUCCESS,
                fileInfo: foundFiles
            });
        } catch (err) {
            await sendResponse({
                status: Status.PROCESSING_ERROR,
                errorMessage: err?.message ?? err?.toString() ?? 'Processing error'
            });
        }
    }
}
