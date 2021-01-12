import { IFileInfo, IUploadRequest } from './torrent';

export type DataType = IUploadRequest['data'];

export interface ChunkData {
    index: number,
    data: DataType;
}

export interface FileData {
    fileInfo: IFileInfo;
    chunks: ChunkData[];
}
