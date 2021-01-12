import * as $protobuf from "protobufjs";
/** Properties of a NodeId. */
export interface INodeId {

    /** NodeId host */
    host?: (string|null);

    /** NodeId port */
    port?: (number|null);

    /** NodeId owner */
    owner?: (string|null);

    /** NodeId index */
    index?: (number|null);
}

/** Represents a NodeId. */
export class NodeId implements INodeId {

    /**
     * Constructs a new NodeId.
     * @param [properties] Properties to set
     */
    constructor(properties?: INodeId);

    /** NodeId host. */
    public host: string;

    /** NodeId port. */
    public port: number;

    /** NodeId owner. */
    public owner: string;

    /** NodeId index. */
    public index: number;

    /**
     * Creates a new NodeId instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NodeId instance
     */
    public static create(properties?: INodeId): NodeId;

    /**
     * Encodes the specified NodeId message. Does not implicitly {@link NodeId.verify|verify} messages.
     * @param message NodeId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INodeId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NodeId message, length delimited. Does not implicitly {@link NodeId.verify|verify} messages.
     * @param message NodeId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INodeId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NodeId message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NodeId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NodeId;

    /**
     * Decodes a NodeId message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NodeId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NodeId;

    /**
     * Verifies a NodeId message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NodeId message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NodeId
     */
    public static fromObject(object: { [k: string]: any }): NodeId;

    /**
     * Creates a plain object from a NodeId message. Also converts values to other types if specified.
     * @param message NodeId
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NodeId, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NodeId to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChunkInfo. */
export interface IChunkInfo {

    /** ChunkInfo index */
    index?: (number|null);

    /** ChunkInfo size */
    size?: (number|null);

    /** ChunkInfo hash */
    hash?: (Uint8Array|null);
}

/** Represents a ChunkInfo. */
export class ChunkInfo implements IChunkInfo {

    /**
     * Constructs a new ChunkInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChunkInfo);

    /** ChunkInfo index. */
    public index: number;

    /** ChunkInfo size. */
    public size: number;

    /** ChunkInfo hash. */
    public hash: Uint8Array;

    /**
     * Creates a new ChunkInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChunkInfo instance
     */
    public static create(properties?: IChunkInfo): ChunkInfo;

    /**
     * Encodes the specified ChunkInfo message. Does not implicitly {@link ChunkInfo.verify|verify} messages.
     * @param message ChunkInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChunkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChunkInfo message, length delimited. Does not implicitly {@link ChunkInfo.verify|verify} messages.
     * @param message ChunkInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChunkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChunkInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChunkInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChunkInfo;

    /**
     * Decodes a ChunkInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChunkInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChunkInfo;

    /**
     * Verifies a ChunkInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChunkInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChunkInfo
     */
    public static fromObject(object: { [k: string]: any }): ChunkInfo;

    /**
     * Creates a plain object from a ChunkInfo message. Also converts values to other types if specified.
     * @param message ChunkInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChunkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChunkInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FileInfo. */
export interface IFileInfo {

    /** FileInfo hash */
    hash?: (Uint8Array|null);

    /** FileInfo size */
    size?: (number|null);

    /** FileInfo filename */
    filename?: (string|null);

    /** FileInfo chunks */
    chunks?: (IChunkInfo[]|null);
}

/** Represents a FileInfo. */
export class FileInfo implements IFileInfo {

    /**
     * Constructs a new FileInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFileInfo);

    /** FileInfo hash. */
    public hash: Uint8Array;

    /** FileInfo size. */
    public size: number;

    /** FileInfo filename. */
    public filename: string;

    /** FileInfo chunks. */
    public chunks: IChunkInfo[];

    /**
     * Creates a new FileInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FileInfo instance
     */
    public static create(properties?: IFileInfo): FileInfo;

    /**
     * Encodes the specified FileInfo message. Does not implicitly {@link FileInfo.verify|verify} messages.
     * @param message FileInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link FileInfo.verify|verify} messages.
     * @param message FileInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FileInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FileInfo;

    /**
     * Decodes a FileInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FileInfo;

    /**
     * Verifies a FileInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FileInfo
     */
    public static fromObject(object: { [k: string]: any }): FileInfo;

    /**
     * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
     * @param message FileInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FileInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NodeReplicationStatus. */
export interface INodeReplicationStatus {

    /** NodeReplicationStatus node */
    node?: (INodeId|null);

    /** NodeReplicationStatus chunkIndex */
    chunkIndex?: (number|null);

    /** NodeReplicationStatus status */
    status?: (Status|null);

    /** NodeReplicationStatus errorMessage */
    errorMessage?: (string|null);
}

/** Represents a NodeReplicationStatus. */
export class NodeReplicationStatus implements INodeReplicationStatus {

    /**
     * Constructs a new NodeReplicationStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: INodeReplicationStatus);

    /** NodeReplicationStatus node. */
    public node?: (INodeId|null);

    /** NodeReplicationStatus chunkIndex. */
    public chunkIndex: number;

    /** NodeReplicationStatus status. */
    public status: Status;

    /** NodeReplicationStatus errorMessage. */
    public errorMessage: string;

    /**
     * Creates a new NodeReplicationStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NodeReplicationStatus instance
     */
    public static create(properties?: INodeReplicationStatus): NodeReplicationStatus;

    /**
     * Encodes the specified NodeReplicationStatus message. Does not implicitly {@link NodeReplicationStatus.verify|verify} messages.
     * @param message NodeReplicationStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INodeReplicationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NodeReplicationStatus message, length delimited. Does not implicitly {@link NodeReplicationStatus.verify|verify} messages.
     * @param message NodeReplicationStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INodeReplicationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NodeReplicationStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NodeReplicationStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NodeReplicationStatus;

    /**
     * Decodes a NodeReplicationStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NodeReplicationStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NodeReplicationStatus;

    /**
     * Verifies a NodeReplicationStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NodeReplicationStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NodeReplicationStatus
     */
    public static fromObject(object: { [k: string]: any }): NodeReplicationStatus;

    /**
     * Creates a plain object from a NodeReplicationStatus message. Also converts values to other types if specified.
     * @param message NodeReplicationStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NodeReplicationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NodeReplicationStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NodeSearchResult. */
export interface INodeSearchResult {

    /** NodeSearchResult node */
    node?: (INodeId|null);

    /** NodeSearchResult status */
    status?: (Status|null);

    /** NodeSearchResult errorMessage */
    errorMessage?: (string|null);

    /** NodeSearchResult files */
    files?: (IFileInfo[]|null);
}

/** Represents a NodeSearchResult. */
export class NodeSearchResult implements INodeSearchResult {

    /**
     * Constructs a new NodeSearchResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: INodeSearchResult);

    /** NodeSearchResult node. */
    public node?: (INodeId|null);

    /** NodeSearchResult status. */
    public status: Status;

    /** NodeSearchResult errorMessage. */
    public errorMessage: string;

    /** NodeSearchResult files. */
    public files: IFileInfo[];

    /**
     * Creates a new NodeSearchResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NodeSearchResult instance
     */
    public static create(properties?: INodeSearchResult): NodeSearchResult;

    /**
     * Encodes the specified NodeSearchResult message. Does not implicitly {@link NodeSearchResult.verify|verify} messages.
     * @param message NodeSearchResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INodeSearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NodeSearchResult message, length delimited. Does not implicitly {@link NodeSearchResult.verify|verify} messages.
     * @param message NodeSearchResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INodeSearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NodeSearchResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NodeSearchResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NodeSearchResult;

    /**
     * Decodes a NodeSearchResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NodeSearchResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NodeSearchResult;

    /**
     * Verifies a NodeSearchResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NodeSearchResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NodeSearchResult
     */
    public static fromObject(object: { [k: string]: any }): NodeSearchResult;

    /**
     * Creates a plain object from a NodeSearchResult message. Also converts values to other types if specified.
     * @param message NodeSearchResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NodeSearchResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NodeSearchResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RegistrationRequest. */
export interface IRegistrationRequest {

    /** RegistrationRequest owner */
    owner?: (string|null);

    /** RegistrationRequest index */
    index?: (number|null);

    /** RegistrationRequest port */
    port?: (number|null);
}

/** Represents a RegistrationRequest. */
export class RegistrationRequest implements IRegistrationRequest {

    /**
     * Constructs a new RegistrationRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRegistrationRequest);

    /** RegistrationRequest owner. */
    public owner: string;

    /** RegistrationRequest index. */
    public index: number;

    /** RegistrationRequest port. */
    public port: number;

    /**
     * Creates a new RegistrationRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RegistrationRequest instance
     */
    public static create(properties?: IRegistrationRequest): RegistrationRequest;

    /**
     * Encodes the specified RegistrationRequest message. Does not implicitly {@link RegistrationRequest.verify|verify} messages.
     * @param message RegistrationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RegistrationRequest message, length delimited. Does not implicitly {@link RegistrationRequest.verify|verify} messages.
     * @param message RegistrationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RegistrationRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RegistrationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RegistrationRequest;

    /**
     * Decodes a RegistrationRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RegistrationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RegistrationRequest;

    /**
     * Verifies a RegistrationRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RegistrationRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RegistrationRequest
     */
    public static fromObject(object: { [k: string]: any }): RegistrationRequest;

    /**
     * Creates a plain object from a RegistrationRequest message. Also converts values to other types if specified.
     * @param message RegistrationRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RegistrationRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RegistrationResponse. */
export interface IRegistrationResponse {

    /** RegistrationResponse status */
    status?: (Status|null);

    /** RegistrationResponse errorMessage */
    errorMessage?: (string|null);
}

/** Represents a RegistrationResponse. */
export class RegistrationResponse implements IRegistrationResponse {

    /**
     * Constructs a new RegistrationResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRegistrationResponse);

    /** RegistrationResponse status. */
    public status: Status;

    /** RegistrationResponse errorMessage. */
    public errorMessage: string;

    /**
     * Creates a new RegistrationResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RegistrationResponse instance
     */
    public static create(properties?: IRegistrationResponse): RegistrationResponse;

    /**
     * Encodes the specified RegistrationResponse message. Does not implicitly {@link RegistrationResponse.verify|verify} messages.
     * @param message RegistrationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRegistrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RegistrationResponse message, length delimited. Does not implicitly {@link RegistrationResponse.verify|verify} messages.
     * @param message RegistrationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRegistrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RegistrationResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RegistrationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RegistrationResponse;

    /**
     * Decodes a RegistrationResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RegistrationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RegistrationResponse;

    /**
     * Verifies a RegistrationResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RegistrationResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RegistrationResponse
     */
    public static fromObject(object: { [k: string]: any }): RegistrationResponse;

    /**
     * Creates a plain object from a RegistrationResponse message. Also converts values to other types if specified.
     * @param message RegistrationResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RegistrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RegistrationResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SubnetRequest. */
export interface ISubnetRequest {

    /** SubnetRequest subnetId */
    subnetId?: (number|null);
}

/** Represents a SubnetRequest. */
export class SubnetRequest implements ISubnetRequest {

    /**
     * Constructs a new SubnetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubnetRequest);

    /** SubnetRequest subnetId. */
    public subnetId: number;

    /**
     * Creates a new SubnetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubnetRequest instance
     */
    public static create(properties?: ISubnetRequest): SubnetRequest;

    /**
     * Encodes the specified SubnetRequest message. Does not implicitly {@link SubnetRequest.verify|verify} messages.
     * @param message SubnetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubnetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubnetRequest message, length delimited. Does not implicitly {@link SubnetRequest.verify|verify} messages.
     * @param message SubnetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubnetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubnetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubnetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubnetRequest;

    /**
     * Decodes a SubnetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubnetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubnetRequest;

    /**
     * Verifies a SubnetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubnetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubnetRequest
     */
    public static fromObject(object: { [k: string]: any }): SubnetRequest;

    /**
     * Creates a plain object from a SubnetRequest message. Also converts values to other types if specified.
     * @param message SubnetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubnetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubnetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SubnetResponse. */
export interface ISubnetResponse {

    /** SubnetResponse status */
    status?: (Status|null);

    /** SubnetResponse errorMessage */
    errorMessage?: (string|null);

    /** SubnetResponse nodes */
    nodes?: (INodeId[]|null);
}

/** Represents a SubnetResponse. */
export class SubnetResponse implements ISubnetResponse {

    /**
     * Constructs a new SubnetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubnetResponse);

    /** SubnetResponse status. */
    public status: Status;

    /** SubnetResponse errorMessage. */
    public errorMessage: string;

    /** SubnetResponse nodes. */
    public nodes: INodeId[];

    /**
     * Creates a new SubnetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubnetResponse instance
     */
    public static create(properties?: ISubnetResponse): SubnetResponse;

    /**
     * Encodes the specified SubnetResponse message. Does not implicitly {@link SubnetResponse.verify|verify} messages.
     * @param message SubnetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubnetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubnetResponse message, length delimited. Does not implicitly {@link SubnetResponse.verify|verify} messages.
     * @param message SubnetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubnetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubnetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubnetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubnetResponse;

    /**
     * Decodes a SubnetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubnetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubnetResponse;

    /**
     * Verifies a SubnetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubnetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubnetResponse
     */
    public static fromObject(object: { [k: string]: any }): SubnetResponse;

    /**
     * Creates a plain object from a SubnetResponse message. Also converts values to other types if specified.
     * @param message SubnetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubnetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubnetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LocalSearchRequest. */
export interface ILocalSearchRequest {

    /** LocalSearchRequest regex */
    regex?: (string|null);
}

/** Represents a LocalSearchRequest. */
export class LocalSearchRequest implements ILocalSearchRequest {

    /**
     * Constructs a new LocalSearchRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILocalSearchRequest);

    /** LocalSearchRequest regex. */
    public regex: string;

    /**
     * Creates a new LocalSearchRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LocalSearchRequest instance
     */
    public static create(properties?: ILocalSearchRequest): LocalSearchRequest;

    /**
     * Encodes the specified LocalSearchRequest message. Does not implicitly {@link LocalSearchRequest.verify|verify} messages.
     * @param message LocalSearchRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILocalSearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LocalSearchRequest message, length delimited. Does not implicitly {@link LocalSearchRequest.verify|verify} messages.
     * @param message LocalSearchRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILocalSearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LocalSearchRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LocalSearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LocalSearchRequest;

    /**
     * Decodes a LocalSearchRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LocalSearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LocalSearchRequest;

    /**
     * Verifies a LocalSearchRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LocalSearchRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LocalSearchRequest
     */
    public static fromObject(object: { [k: string]: any }): LocalSearchRequest;

    /**
     * Creates a plain object from a LocalSearchRequest message. Also converts values to other types if specified.
     * @param message LocalSearchRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LocalSearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LocalSearchRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LocalSearchResponse. */
export interface ILocalSearchResponse {

    /** LocalSearchResponse status */
    status?: (Status|null);

    /** LocalSearchResponse errorMessage */
    errorMessage?: (string|null);

    /** LocalSearchResponse fileInfo */
    fileInfo?: (IFileInfo[]|null);
}

/** Represents a LocalSearchResponse. */
export class LocalSearchResponse implements ILocalSearchResponse {

    /**
     * Constructs a new LocalSearchResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILocalSearchResponse);

    /** LocalSearchResponse status. */
    public status: Status;

    /** LocalSearchResponse errorMessage. */
    public errorMessage: string;

    /** LocalSearchResponse fileInfo. */
    public fileInfo: IFileInfo[];

    /**
     * Creates a new LocalSearchResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LocalSearchResponse instance
     */
    public static create(properties?: ILocalSearchResponse): LocalSearchResponse;

    /**
     * Encodes the specified LocalSearchResponse message. Does not implicitly {@link LocalSearchResponse.verify|verify} messages.
     * @param message LocalSearchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILocalSearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LocalSearchResponse message, length delimited. Does not implicitly {@link LocalSearchResponse.verify|verify} messages.
     * @param message LocalSearchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILocalSearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LocalSearchResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LocalSearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LocalSearchResponse;

    /**
     * Decodes a LocalSearchResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LocalSearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LocalSearchResponse;

    /**
     * Verifies a LocalSearchResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LocalSearchResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LocalSearchResponse
     */
    public static fromObject(object: { [k: string]: any }): LocalSearchResponse;

    /**
     * Creates a plain object from a LocalSearchResponse message. Also converts values to other types if specified.
     * @param message LocalSearchResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LocalSearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LocalSearchResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SearchRequest. */
export interface ISearchRequest {

    /** SearchRequest regex */
    regex?: (string|null);

    /** SearchRequest subnetId */
    subnetId?: (number|null);
}

/** Represents a SearchRequest. */
export class SearchRequest implements ISearchRequest {

    /**
     * Constructs a new SearchRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISearchRequest);

    /** SearchRequest regex. */
    public regex: string;

    /** SearchRequest subnetId. */
    public subnetId: number;

    /**
     * Creates a new SearchRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SearchRequest instance
     */
    public static create(properties?: ISearchRequest): SearchRequest;

    /**
     * Encodes the specified SearchRequest message. Does not implicitly {@link SearchRequest.verify|verify} messages.
     * @param message SearchRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link SearchRequest.verify|verify} messages.
     * @param message SearchRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SearchRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchRequest;

    /**
     * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchRequest;

    /**
     * Verifies a SearchRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SearchRequest
     */
    public static fromObject(object: { [k: string]: any }): SearchRequest;

    /**
     * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
     * @param message SearchRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SearchRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SearchResponse. */
export interface ISearchResponse {

    /** SearchResponse status */
    status?: (Status|null);

    /** SearchResponse errorMessage */
    errorMessage?: (string|null);

    /** SearchResponse results */
    results?: (INodeSearchResult[]|null);
}

/** Represents a SearchResponse. */
export class SearchResponse implements ISearchResponse {

    /**
     * Constructs a new SearchResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISearchResponse);

    /** SearchResponse status. */
    public status: Status;

    /** SearchResponse errorMessage. */
    public errorMessage: string;

    /** SearchResponse results. */
    public results: INodeSearchResult[];

    /**
     * Creates a new SearchResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SearchResponse instance
     */
    public static create(properties?: ISearchResponse): SearchResponse;

    /**
     * Encodes the specified SearchResponse message. Does not implicitly {@link SearchResponse.verify|verify} messages.
     * @param message SearchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link SearchResponse.verify|verify} messages.
     * @param message SearchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SearchResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse;

    /**
     * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse;

    /**
     * Verifies a SearchResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SearchResponse
     */
    public static fromObject(object: { [k: string]: any }): SearchResponse;

    /**
     * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
     * @param message SearchResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SearchResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UploadRequest. */
export interface IUploadRequest {

    /** UploadRequest filename */
    filename?: (string|null);

    /** UploadRequest data */
    data?: (Uint8Array|null);
}

/** Represents an UploadRequest. */
export class UploadRequest implements IUploadRequest {

    /**
     * Constructs a new UploadRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUploadRequest);

    /** UploadRequest filename. */
    public filename: string;

    /** UploadRequest data. */
    public data: Uint8Array;

    /**
     * Creates a new UploadRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UploadRequest instance
     */
    public static create(properties?: IUploadRequest): UploadRequest;

    /**
     * Encodes the specified UploadRequest message. Does not implicitly {@link UploadRequest.verify|verify} messages.
     * @param message UploadRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUploadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UploadRequest message, length delimited. Does not implicitly {@link UploadRequest.verify|verify} messages.
     * @param message UploadRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUploadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UploadRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UploadRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UploadRequest;

    /**
     * Decodes an UploadRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UploadRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UploadRequest;

    /**
     * Verifies an UploadRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UploadRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UploadRequest
     */
    public static fromObject(object: { [k: string]: any }): UploadRequest;

    /**
     * Creates a plain object from an UploadRequest message. Also converts values to other types if specified.
     * @param message UploadRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UploadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UploadRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UploadResponse. */
export interface IUploadResponse {

    /** UploadResponse status */
    status?: (Status|null);

    /** UploadResponse errorMessage */
    errorMessage?: (string|null);

    /** UploadResponse fileInfo */
    fileInfo?: (IFileInfo|null);
}

/** Represents an UploadResponse. */
export class UploadResponse implements IUploadResponse {

    /**
     * Constructs a new UploadResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUploadResponse);

    /** UploadResponse status. */
    public status: Status;

    /** UploadResponse errorMessage. */
    public errorMessage: string;

    /** UploadResponse fileInfo. */
    public fileInfo?: (IFileInfo|null);

    /**
     * Creates a new UploadResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UploadResponse instance
     */
    public static create(properties?: IUploadResponse): UploadResponse;

    /**
     * Encodes the specified UploadResponse message. Does not implicitly {@link UploadResponse.verify|verify} messages.
     * @param message UploadResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUploadResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UploadResponse message, length delimited. Does not implicitly {@link UploadResponse.verify|verify} messages.
     * @param message UploadResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUploadResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UploadResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UploadResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UploadResponse;

    /**
     * Decodes an UploadResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UploadResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UploadResponse;

    /**
     * Verifies an UploadResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UploadResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UploadResponse
     */
    public static fromObject(object: { [k: string]: any }): UploadResponse;

    /**
     * Creates a plain object from an UploadResponse message. Also converts values to other types if specified.
     * @param message UploadResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UploadResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UploadResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReplicateRequest. */
export interface IReplicateRequest {

    /** ReplicateRequest fileInfo */
    fileInfo?: (IFileInfo|null);

    /** ReplicateRequest subnetId */
    subnetId?: (number|null);
}

/** Represents a ReplicateRequest. */
export class ReplicateRequest implements IReplicateRequest {

    /**
     * Constructs a new ReplicateRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReplicateRequest);

    /** ReplicateRequest fileInfo. */
    public fileInfo?: (IFileInfo|null);

    /** ReplicateRequest subnetId. */
    public subnetId: number;

    /**
     * Creates a new ReplicateRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReplicateRequest instance
     */
    public static create(properties?: IReplicateRequest): ReplicateRequest;

    /**
     * Encodes the specified ReplicateRequest message. Does not implicitly {@link ReplicateRequest.verify|verify} messages.
     * @param message ReplicateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReplicateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReplicateRequest message, length delimited. Does not implicitly {@link ReplicateRequest.verify|verify} messages.
     * @param message ReplicateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReplicateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReplicateRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReplicateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReplicateRequest;

    /**
     * Decodes a ReplicateRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReplicateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReplicateRequest;

    /**
     * Verifies a ReplicateRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReplicateRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReplicateRequest
     */
    public static fromObject(object: { [k: string]: any }): ReplicateRequest;

    /**
     * Creates a plain object from a ReplicateRequest message. Also converts values to other types if specified.
     * @param message ReplicateRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReplicateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReplicateRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReplicateResponse. */
export interface IReplicateResponse {

    /** ReplicateResponse status */
    status?: (Status|null);

    /** ReplicateResponse errorMessage */
    errorMessage?: (string|null);

    /** ReplicateResponse nodeStatusList */
    nodeStatusList?: (INodeReplicationStatus[]|null);
}

/** Represents a ReplicateResponse. */
export class ReplicateResponse implements IReplicateResponse {

    /**
     * Constructs a new ReplicateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReplicateResponse);

    /** ReplicateResponse status. */
    public status: Status;

    /** ReplicateResponse errorMessage. */
    public errorMessage: string;

    /** ReplicateResponse nodeStatusList. */
    public nodeStatusList: INodeReplicationStatus[];

    /**
     * Creates a new ReplicateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReplicateResponse instance
     */
    public static create(properties?: IReplicateResponse): ReplicateResponse;

    /**
     * Encodes the specified ReplicateResponse message. Does not implicitly {@link ReplicateResponse.verify|verify} messages.
     * @param message ReplicateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReplicateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReplicateResponse message, length delimited. Does not implicitly {@link ReplicateResponse.verify|verify} messages.
     * @param message ReplicateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReplicateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReplicateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReplicateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReplicateResponse;

    /**
     * Decodes a ReplicateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReplicateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReplicateResponse;

    /**
     * Verifies a ReplicateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReplicateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReplicateResponse
     */
    public static fromObject(object: { [k: string]: any }): ReplicateResponse;

    /**
     * Creates a plain object from a ReplicateResponse message. Also converts values to other types if specified.
     * @param message ReplicateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReplicateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReplicateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChunkRequest. */
export interface IChunkRequest {

    /** ChunkRequest fileHash */
    fileHash?: (Uint8Array|null);

    /** ChunkRequest chunkIndex */
    chunkIndex?: (number|null);
}

/** Represents a ChunkRequest. */
export class ChunkRequest implements IChunkRequest {

    /**
     * Constructs a new ChunkRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChunkRequest);

    /** ChunkRequest fileHash. */
    public fileHash: Uint8Array;

    /** ChunkRequest chunkIndex. */
    public chunkIndex: number;

    /**
     * Creates a new ChunkRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChunkRequest instance
     */
    public static create(properties?: IChunkRequest): ChunkRequest;

    /**
     * Encodes the specified ChunkRequest message. Does not implicitly {@link ChunkRequest.verify|verify} messages.
     * @param message ChunkRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChunkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChunkRequest message, length delimited. Does not implicitly {@link ChunkRequest.verify|verify} messages.
     * @param message ChunkRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChunkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChunkRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChunkRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChunkRequest;

    /**
     * Decodes a ChunkRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChunkRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChunkRequest;

    /**
     * Verifies a ChunkRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChunkRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChunkRequest
     */
    public static fromObject(object: { [k: string]: any }): ChunkRequest;

    /**
     * Creates a plain object from a ChunkRequest message. Also converts values to other types if specified.
     * @param message ChunkRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChunkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChunkRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChunkResponse. */
export interface IChunkResponse {

    /** ChunkResponse status */
    status?: (Status|null);

    /** ChunkResponse errorMessage */
    errorMessage?: (string|null);

    /** ChunkResponse data */
    data?: (Uint8Array|null);
}

/** Represents a ChunkResponse. */
export class ChunkResponse implements IChunkResponse {

    /**
     * Constructs a new ChunkResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChunkResponse);

    /** ChunkResponse status. */
    public status: Status;

    /** ChunkResponse errorMessage. */
    public errorMessage: string;

    /** ChunkResponse data. */
    public data: Uint8Array;

    /**
     * Creates a new ChunkResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChunkResponse instance
     */
    public static create(properties?: IChunkResponse): ChunkResponse;

    /**
     * Encodes the specified ChunkResponse message. Does not implicitly {@link ChunkResponse.verify|verify} messages.
     * @param message ChunkResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChunkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChunkResponse message, length delimited. Does not implicitly {@link ChunkResponse.verify|verify} messages.
     * @param message ChunkResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChunkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChunkResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChunkResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChunkResponse;

    /**
     * Decodes a ChunkResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChunkResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChunkResponse;

    /**
     * Verifies a ChunkResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChunkResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChunkResponse
     */
    public static fromObject(object: { [k: string]: any }): ChunkResponse;

    /**
     * Creates a plain object from a ChunkResponse message. Also converts values to other types if specified.
     * @param message ChunkResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChunkResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChunkResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DownloadRequest. */
export interface IDownloadRequest {

    /** DownloadRequest fileHash */
    fileHash?: (Uint8Array|null);
}

/** Represents a DownloadRequest. */
export class DownloadRequest implements IDownloadRequest {

    /**
     * Constructs a new DownloadRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDownloadRequest);

    /** DownloadRequest fileHash. */
    public fileHash: Uint8Array;

    /**
     * Creates a new DownloadRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DownloadRequest instance
     */
    public static create(properties?: IDownloadRequest): DownloadRequest;

    /**
     * Encodes the specified DownloadRequest message. Does not implicitly {@link DownloadRequest.verify|verify} messages.
     * @param message DownloadRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDownloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DownloadRequest message, length delimited. Does not implicitly {@link DownloadRequest.verify|verify} messages.
     * @param message DownloadRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDownloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DownloadRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DownloadRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DownloadRequest;

    /**
     * Decodes a DownloadRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DownloadRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DownloadRequest;

    /**
     * Verifies a DownloadRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DownloadRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DownloadRequest
     */
    public static fromObject(object: { [k: string]: any }): DownloadRequest;

    /**
     * Creates a plain object from a DownloadRequest message. Also converts values to other types if specified.
     * @param message DownloadRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DownloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DownloadRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DownloadResponse. */
export interface IDownloadResponse {

    /** DownloadResponse status */
    status?: (Status|null);

    /** DownloadResponse errorMessage */
    errorMessage?: (string|null);

    /** DownloadResponse data */
    data?: (Uint8Array|null);
}

/** Represents a DownloadResponse. */
export class DownloadResponse implements IDownloadResponse {

    /**
     * Constructs a new DownloadResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDownloadResponse);

    /** DownloadResponse status. */
    public status: Status;

    /** DownloadResponse errorMessage. */
    public errorMessage: string;

    /** DownloadResponse data. */
    public data: Uint8Array;

    /**
     * Creates a new DownloadResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DownloadResponse instance
     */
    public static create(properties?: IDownloadResponse): DownloadResponse;

    /**
     * Encodes the specified DownloadResponse message. Does not implicitly {@link DownloadResponse.verify|verify} messages.
     * @param message DownloadResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDownloadResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DownloadResponse message, length delimited. Does not implicitly {@link DownloadResponse.verify|verify} messages.
     * @param message DownloadResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDownloadResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DownloadResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DownloadResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DownloadResponse;

    /**
     * Decodes a DownloadResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DownloadResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DownloadResponse;

    /**
     * Verifies a DownloadResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DownloadResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DownloadResponse
     */
    public static fromObject(object: { [k: string]: any }): DownloadResponse;

    /**
     * Creates a plain object from a DownloadResponse message. Also converts values to other types if specified.
     * @param message DownloadResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DownloadResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DownloadResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Message. */
export interface IMessage {

    /** Message type */
    type?: (Message.Type|null);

    /** Message localSearchRequest */
    localSearchRequest?: (ILocalSearchRequest|null);

    /** Message localSearchResponse */
    localSearchResponse?: (ILocalSearchResponse|null);

    /** Message searchRequest */
    searchRequest?: (ISearchRequest|null);

    /** Message searchResponse */
    searchResponse?: (ISearchResponse|null);

    /** Message uploadRequest */
    uploadRequest?: (IUploadRequest|null);

    /** Message uploadResponse */
    uploadResponse?: (IUploadResponse|null);

    /** Message replicateRequest */
    replicateRequest?: (IReplicateRequest|null);

    /** Message replicateResponse */
    replicateResponse?: (IReplicateResponse|null);

    /** Message chunkRequest */
    chunkRequest?: (IChunkRequest|null);

    /** Message chunkResponse */
    chunkResponse?: (IChunkResponse|null);

    /** Message downloadRequest */
    downloadRequest?: (IDownloadRequest|null);

    /** Message downloadResponse */
    downloadResponse?: (IDownloadResponse|null);

    /** Message registrationRequest */
    registrationRequest?: (IRegistrationRequest|null);

    /** Message registrationResponse */
    registrationResponse?: (IRegistrationResponse|null);

    /** Message subnetRequest */
    subnetRequest?: (ISubnetRequest|null);

    /** Message subnetResponse */
    subnetResponse?: (ISubnetResponse|null);
}

/** Represents a Message. */
export class Message implements IMessage {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message type. */
    public type: Message.Type;

    /** Message localSearchRequest. */
    public localSearchRequest?: (ILocalSearchRequest|null);

    /** Message localSearchResponse. */
    public localSearchResponse?: (ILocalSearchResponse|null);

    /** Message searchRequest. */
    public searchRequest?: (ISearchRequest|null);

    /** Message searchResponse. */
    public searchResponse?: (ISearchResponse|null);

    /** Message uploadRequest. */
    public uploadRequest?: (IUploadRequest|null);

    /** Message uploadResponse. */
    public uploadResponse?: (IUploadResponse|null);

    /** Message replicateRequest. */
    public replicateRequest?: (IReplicateRequest|null);

    /** Message replicateResponse. */
    public replicateResponse?: (IReplicateResponse|null);

    /** Message chunkRequest. */
    public chunkRequest?: (IChunkRequest|null);

    /** Message chunkResponse. */
    public chunkResponse?: (IChunkResponse|null);

    /** Message downloadRequest. */
    public downloadRequest?: (IDownloadRequest|null);

    /** Message downloadResponse. */
    public downloadResponse?: (IDownloadResponse|null);

    /** Message registrationRequest. */
    public registrationRequest?: (IRegistrationRequest|null);

    /** Message registrationResponse. */
    public registrationResponse?: (IRegistrationResponse|null);

    /** Message subnetRequest. */
    public subnetRequest?: (ISubnetRequest|null);

    /** Message subnetResponse. */
    public subnetResponse?: (ISubnetResponse|null);

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Message
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Message {

    /** Type enum. */
    enum Type {
        LOCAL_SEARCH_REQUEST = 0,
        LOCAL_SEARCH_RESPONSE = 1,
        SEARCH_REQUEST = 2,
        SEARCH_RESPONSE = 3,
        UPLOAD_REQUEST = 4,
        UPLOAD_RESPONSE = 5,
        REPLICATE_REQUEST = 6,
        REPLICATE_RESPONSE = 7,
        CHUNK_REQUEST = 8,
        CHUNK_RESPONSE = 9,
        DOWNLOAD_REQUEST = 10,
        DOWNLOAD_RESPONSE = 11,
        REGISTRATION_REQUEST = 12,
        REGISTRATION_RESPONSE = 13,
        SUBNET_REQUEST = 14,
        SUBNET_RESPONSE = 15
    }
}

/** Status enum. */
export enum Status {
    SUCCESS = 0,
    UNABLE_TO_COMPLETE = 1,
    MESSAGE_ERROR = 2,
    NETWORK_ERROR = 3,
    PROCESSING_ERROR = 4
}
