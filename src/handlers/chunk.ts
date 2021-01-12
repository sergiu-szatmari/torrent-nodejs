import { RequestHandler } from './request-handler';
import { Application } from '../application';
import { IChunkResponse, Message, Status } from '../models/torrent';
import { Socket } from 'net';
import { NetworkSender } from '../network/network-sender';
import { Utils } from '../utils/general-utils';

export class ChunkHandler extends RequestHandler {

    constructor(app: Application) { super(app, Message.Type.CHUNK_REQUEST); }


    async handle(message: Message, socket: Socket): Promise<void> {
        // Helper function to send response back to node
        const sendResponse = async (response: IChunkResponse) => {
            await NetworkSender.sendResponse(socket, Message.create({
                type: Message.Type.CHUNK_RESPONSE,
                chunkResponse: response
            }));
        }

        const chunkRequest = message.chunkRequest!;
        const { fileHash, chunkIndex } = chunkRequest;

        try {
            if (fileHash!.byteLength !== 16 || chunkIndex! < 0) {
                await sendResponse({
                    status: Status.MESSAGE_ERROR,
                    errorMessage: 'File hash is not 16 chars or idx < 0'
                });
                return;
            }

            for (const file of this.app.files.values()) {
                if (!Utils.hashMatch(file.fileInfo.hash, fileHash)) continue;

                const foundChunk = file.chunks.find(chunk => chunk.index === chunkIndex);

                const response = !foundChunk ?
                    { status: Status.UNABLE_TO_COMPLETE, errorMessage: 'Chunk not found', } :
                    { status: Status.SUCCESS, data: foundChunk.data, };
                await sendResponse(response);
                return;
            }

            await sendResponse({
                status: Status.UNABLE_TO_COMPLETE,
                errorMessage: 'File not found',
            });
            return;
        } catch (err) {
            try {
                await sendResponse({
                    status: Status.PROCESSING_ERROR,
                    errorMessage: 'Processing error'
                });
            } catch (err) { }
        }
    }
}
