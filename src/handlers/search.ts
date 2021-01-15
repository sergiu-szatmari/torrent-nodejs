import { RequestHandler } from './request-handler';
import { Application } from '../application';
import { IFileInfo, INodeSearchResult, ISearchResponse, Message, Status } from '../models/torrent';
import { Socket } from 'net';
import { NetworkSender } from '../network/network-sender';
import { Constants } from '../utils/constants';

export class SearchHandler extends RequestHandler {

    constructor(app: Application) { super(app, Message.Type.SEARCH_REQUEST); }

    async handle(message: Message, socket: Socket): Promise<void> {
        // Helper function to send response back to nodes
        const sendResponse = async (response: ISearchResponse) => {
            await NetworkSender.sendResponse(socket, Message.create({
                type: Message.Type.SEARCH_RESPONSE,
                searchResponse: response
            }));
        };

        const { searchRequest } = message;
        const regexStr = searchRequest?.regex!;
        const subnetId = searchRequest?.subnetId!;

        let results: INodeSearchResult[] = [];
        let regex: RegExp;

        try {
            // Validate regex
            if (!regexStr) throw new Error();
            regex = new RegExp(regexStr);
        } catch (err) {
            await sendResponse({
                status: Status.MESSAGE_ERROR,
                errorMessage: 'Invalid / empty regex'
            });
            return;
        }

        console.info(`[ SearchRequest ] Searching for ${ regexStr }`);

        // Ask for subnet
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
                results
            });
            return;
        }

        const otherNodes = subnetResponse.nodes!.filter(
            (node) => node.owner !== Constants.OWNER || node.index !== this.app.index
        );

        // Push local file search
        const foundLocalFiles: IFileInfo[] = [];
        this.app.files.forEach((file) => {
            if (regex.test(file.fileInfo.filename!)) {
                foundLocalFiles.push(file.fileInfo);
            }
        });

        results.push({
            files: foundLocalFiles,
            status: Status.SUCCESS,
            node: subnetResponse.nodes?.find((node) => node.owner === Constants.OWNER && node.index === this.app.index)
        });

        await Promise.all(
            otherNodes.map(async (node) => {
                // Search node for files
                const localSearchRequestMessage = Message.create({
                    type: Message.Type.LOCAL_SEARCH_REQUEST,
                    localSearchRequest: { regex: regexStr }
                });

                try {
                    const localSearchResponseMessage = await NetworkSender.sendMessage(node, localSearchRequestMessage);
                    const localSearchResponse = localSearchResponseMessage?.localSearchResponse;

                    // Aggregate the result
                    results.push({
                        status: localSearchResponse?.status,
                        files: localSearchResponse?.fileInfo,
                        errorMessage: localSearchResponse?.errorMessage,
                        node
                    });
                } catch (err) {
                    results.push({
                        status: Status.NETWORK_ERROR,
                        errorMessage: 'Cannot send message to node',
                        node
                    });
                }
            })
        );

        // Send result to hub
        try {
            await sendResponse({
                status: Status.SUCCESS,
                results,
            });
        } catch (err) { }
    }
}
