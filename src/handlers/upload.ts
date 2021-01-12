import { RequestHandler } from './request-handler';
import { Application } from '../application';
import { IChunkInfo, IUploadResponse, Message, Status } from '../models/torrent';
import { Socket } from 'net';
import { ChunkData, DataType, FileData } from '../models/app-model';
import { Utils } from '../utils/general-utils';
import { Constants } from '../utils/constants';
import { NetworkSender } from '../network/network-sender';

export class UploadHandler extends RequestHandler {

    constructor(app: Application) { super(app, Message.Type.UPLOAD_REQUEST); }

    getFileData(filename: string, data: DataType): FileData {
        const hash = Utils.hash(data);
        const chunks: IChunkInfo[] = [];
        const chunksData: ChunkData[] = [];
        const size = data?.byteLength ?? 0;

        let numberOfChunks = Math.floor(size / Constants.CHUNK_SIZE);
        if (size % Constants.CHUNK_SIZE !== 0) numberOfChunks++;

        for (let index = 0; index < numberOfChunks; index++) {
            const offset = index * Constants.CHUNK_SIZE;
            const chunkData = data!.slice(offset, offset + Constants.CHUNK_SIZE);
            const chunk: IChunkInfo = {
                index,
                hash: Utils.hash(chunkData),
                size: chunkData.byteLength
            };

            chunks.push(chunk);
            chunksData.push({ index, data: chunkData });
        }

        return {
            fileInfo: { filename, hash, size, chunks },
            chunks: chunksData
        };
    }

    async handle(message: Message, socket: Socket): Promise<void> {
        const { uploadRequest } = message;
        const { filename, data } = uploadRequest!;

        let uploadResponse: IUploadResponse;
        try {
            if (!filename) {
                uploadResponse = {
                    status: Status.MESSAGE_ERROR,
                    errorMessage: 'Empty filename',
                };
                console.log(`Message error: empty filename`);
            } else {
                const fileData = this.getFileData(filename, data);
                this.app.files.set(filename, fileData);
                uploadResponse = {
                    status: Status.SUCCESS,
                    fileInfo: fileData.fileInfo
                };
                console.info(`[ UploadRequest ] Storing locally ${ uploadRequest?.filename }`);
            }
        } catch (err) {
            uploadResponse = {
                status: Status.PROCESSING_ERROR,
                errorMessage: err?.message ?? err?.toString() ?? 'Processing error'
            };
            console.log(`Processing error: ${ err?.message ?? err?.toString() }`);
        }

        const response = Message.create({
            type: Message.Type.UPLOAD_RESPONSE,
            uploadResponse
        });

        try {
            await NetworkSender.sendResponse(socket, response);
        } catch (err) { }
    }
}
