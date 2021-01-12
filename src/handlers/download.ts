import { RequestHandler } from './request-handler';
import { Application } from '../application';
import { IDownloadResponse, Message, Status } from '../models/torrent';
import { Socket } from 'net';
import { NetworkSender } from '../network/network-sender';
import { Utils } from '../utils/general-utils';

export class DownloadHandler extends RequestHandler {

    constructor(app: Application) { super(app, Message.Type.DOWNLOAD_REQUEST); }

    async handle(message: Message, socket: Socket): Promise<void> {
        // Helper function to send response back to hub
        const sendResponse = async (response: IDownloadResponse) => {
            await NetworkSender.sendResponse(socket, Message.create({
                type: Message.Type.DOWNLOAD_RESPONSE,
                downloadResponse: response
            }));
        }

        const downloadRequest = message.downloadRequest!;
        const { fileHash } = downloadRequest;

        if (!fileHash || fileHash.byteLength !== 16) {
            await sendResponse({
                status: Status.MESSAGE_ERROR,
                errorMessage: 'The file hash is not 16 bytes long'
            });
            return;
        }

        console.info(`[ DownloadRequest ] Download file request`);

        for (const file of this.app.files.values()) {
            if (!Utils.hashMatch(file.fileInfo.hash, fileHash)) continue;

            // Concat chunks into one file
            const orderedChunks = file.chunks
                .sort((c1, c2) => c1.index - c2.index)
                .map(c => c.data);
            const data = new Uint8Array(file.fileInfo.size!);
            let offset = 0;

            orderedChunks.forEach(chunk => {
                if (chunk?.length === 0) return;
                data.set(chunk!, offset);
                offset += chunk!.length;
            });

            console.info(`[ DownloadRequest ] Found file "${ file.fileInfo.filename }"`);
            await sendResponse({
                status: Status.SUCCESS,
                data
            });
            return;
        }

        // The file does not exist on this node
        await sendResponse({
            status: Status.UNABLE_TO_COMPLETE,
            errorMessage: 'File not found'
        });
        console.info(`[ DownloadRequest ] File not found`);
    }
}
