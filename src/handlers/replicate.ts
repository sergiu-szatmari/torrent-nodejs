import { RequestHandler } from './request-handler';
import { Application } from '../application';
import { IChunkInfo, INodeId, INodeReplicationStatus, IReplicateResponse, Message, Status } from '../models/torrent';
import { Socket } from 'net';
import { NetworkSender } from '../network/network-sender';
import { ChunkData, FileData } from '../models/app-model';
import { Constants } from '../utils/constants';

export class ReplicateHandler extends RequestHandler {

    constructor(app: Application) {
        super(app, Message.Type.REPLICATE_REQUEST);
    }


    async handle(message: Message, socket: Socket): Promise<void> {
        // Helper function to send response back to hub
        const sendResponse = async (response: IReplicateResponse) => {
            await NetworkSender.sendResponse(socket, Message.create({
                type: Message.Type.REPLICATE_RESPONSE,
                replicateResponse: response
            }));
        }

        const { replicateRequest } = message;
        const { fileInfo, subnetId } = replicateRequest!;
        let nodeStatusList: INodeReplicationStatus[] = [];
        let fileChunks: ChunkData[] = [];

        try {
            // Verify filename
            if (!fileInfo || !fileInfo.filename) {
                await sendResponse({
                    status: Status.MESSAGE_ERROR,
                    errorMessage: 'Empty or missing filename',
                    nodeStatusList
                });
                return;
            }

            // Check if file is already present
            if (this.app.files.get(fileInfo.filename)) {
                await sendResponse({
                    status: Status.SUCCESS,
                    nodeStatusList
                });
                return;
            }

            console.info(`[ ReplicateRequest ] Searching for ${ fileInfo.filename }`);

            // Ask the subnet
            const subnetRequestMessage = Message.create({
                type: Message.Type.SUBNET_REQUEST,
                subnetRequest: { subnetId }
            });
            const subnetResponseMessage = await NetworkSender.sendMessage(this.app.hub, subnetRequestMessage);
            const subnetResponse = subnetResponseMessage.subnetResponse!;

            if (subnetResponse.status !== Status.SUCCESS) {
                await sendResponse({
                    status: Status.NETWORK_ERROR,
                    errorMessage: 'Cannot get subnet from hub',
                    nodeStatusList
                });
                return;
            }

            const otherNodes = subnetResponse.nodes!.filter(
                (node) => node.owner !== Constants.OWNER || node.index !== this.app.index
            );

            // Ask for all chunks
            let isChunkMissing = false;
            await Promise.all(
                fileInfo.chunks!.map(async (chunk) => {
                    let foundChunk = false;

                    for (const node of otherNodes) {
                        // Ask for chunk
                        const chunkRequestMessage = Message.create({
                            type: Message.Type.CHUNK_REQUEST,
                            chunkRequest: {
                                chunkIndex: chunk.index,
                                fileHash: fileInfo.hash
                            }
                        });

                        let nodeStatus: INodeReplicationStatus;
                        try {
                            const chunkResponseMessage = await NetworkSender.sendMessage(node, chunkRequestMessage);
                            const { chunkResponse } = chunkResponseMessage;

                            nodeStatus = {
                                chunkIndex: chunk.index,
                                errorMessage: chunkResponse?.errorMessage,
                                node: node,
                                status: chunkResponse?.status
                            };

                            if (!chunkResponse || chunkResponseMessage.type !== Message.Type.CHUNK_RESPONSE) {
                                nodeStatus.status = Status.MESSAGE_ERROR;
                                nodeStatus.errorMessage = 'Invalid chunk response / wrong type';
                            }

                            nodeStatusList.push(nodeStatus);
                            if (chunkResponse?.status === Status.SUCCESS) {
                                fileChunks.push({
                                    index: chunk.index!,
                                    data: chunkResponse.data
                                });
                                foundChunk = true;
                                break;
                            }
                        } catch (err) {
                            nodeStatus = {
                                chunkIndex: chunk.index!,
                                errorMessage: err?.message ?? err?.message ?? 'Cannot send chunk request to node',
                                node,
                                status: Status.NETWORK_ERROR
                            };
                            nodeStatusList.push(nodeStatus);
                        }
                    }

                    // No node has this chunk
                    if (!foundChunk) isChunkMissing = true;
                })
            );

            if (isChunkMissing) {
                await sendResponse({
                    status: Status.UNABLE_TO_COMPLETE,
                    errorMessage: 'Some chunks are missing',
                    nodeStatusList,
                });
            } else {
                const fileData: FileData = {
                    fileInfo,
                    chunks: fileChunks
                };

                this.app.files.set(fileInfo.filename, fileData);

                await sendResponse({
                    status: Status.SUCCESS,
                    nodeStatusList,
                });
            }
        } catch (err) {
            try {
                await sendResponse({
                    status: Status.PROCESSING_ERROR,
                    errorMessage: err?.message ?? err?.toString() ?? 'Processing error',
                    nodeStatusList
                });
            } catch (err) { }
        }
    }
}
