/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.NodeId = (function() {
    
        /**
         * Properties of a NodeId.
         * @exports INodeId
         * @interface INodeId
         * @property {string|null} [host] NodeId host
         * @property {number|null} [port] NodeId port
         * @property {string|null} [owner] NodeId owner
         * @property {number|null} [index] NodeId index
         */
    
        /**
         * Constructs a new NodeId.
         * @exports NodeId
         * @classdesc Represents a NodeId.
         * @implements INodeId
         * @constructor
         * @param {INodeId=} [properties] Properties to set
         */
        function NodeId(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NodeId host.
         * @member {string} host
         * @memberof NodeId
         * @instance
         */
        NodeId.prototype.host = "";
    
        /**
         * NodeId port.
         * @member {number} port
         * @memberof NodeId
         * @instance
         */
        NodeId.prototype.port = 0;
    
        /**
         * NodeId owner.
         * @member {string} owner
         * @memberof NodeId
         * @instance
         */
        NodeId.prototype.owner = "";
    
        /**
         * NodeId index.
         * @member {number} index
         * @memberof NodeId
         * @instance
         */
        NodeId.prototype.index = 0;
    
        /**
         * Creates a new NodeId instance using the specified properties.
         * @function create
         * @memberof NodeId
         * @static
         * @param {INodeId=} [properties] Properties to set
         * @returns {NodeId} NodeId instance
         */
        NodeId.create = function create(properties) {
            return new NodeId(properties);
        };
    
        /**
         * Encodes the specified NodeId message. Does not implicitly {@link NodeId.verify|verify} messages.
         * @function encode
         * @memberof NodeId
         * @static
         * @param {INodeId} message NodeId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeId.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.host);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
            if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.owner);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.index);
            return writer;
        };
    
        /**
         * Encodes the specified NodeId message, length delimited. Does not implicitly {@link NodeId.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NodeId
         * @static
         * @param {INodeId} message NodeId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeId.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NodeId message from the specified reader or buffer.
         * @function decode
         * @memberof NodeId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NodeId} NodeId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeId.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NodeId();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 2:
                    message.port = reader.int32();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.index = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a NodeId message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NodeId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NodeId} NodeId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeId.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NodeId message.
         * @function verify
         * @memberof NodeId
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeId.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.host != null && message.hasOwnProperty("host"))
                if (!$util.isString(message.host))
                    return "host: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isString(message.owner))
                    return "owner: string expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            return null;
        };
    
        /**
         * Creates a NodeId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NodeId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NodeId} NodeId
         */
        NodeId.fromObject = function fromObject(object) {
            if (object instanceof $root.NodeId)
                return object;
            var message = new $root.NodeId();
            if (object.host != null)
                message.host = String(object.host);
            if (object.port != null)
                message.port = object.port | 0;
            if (object.owner != null)
                message.owner = String(object.owner);
            if (object.index != null)
                message.index = object.index | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a NodeId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NodeId
         * @static
         * @param {NodeId} message NodeId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.host = "";
                object.port = 0;
                object.owner = "";
                object.index = 0;
            }
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = message.host;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            return object;
        };
    
        /**
         * Converts this NodeId to JSON.
         * @function toJSON
         * @memberof NodeId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return NodeId;
    })();
    
    $root.ChunkInfo = (function() {
    
        /**
         * Properties of a ChunkInfo.
         * @exports IChunkInfo
         * @interface IChunkInfo
         * @property {number|null} [index] ChunkInfo index
         * @property {number|null} [size] ChunkInfo size
         * @property {Uint8Array|null} [hash] ChunkInfo hash
         */
    
        /**
         * Constructs a new ChunkInfo.
         * @exports ChunkInfo
         * @classdesc Represents a ChunkInfo.
         * @implements IChunkInfo
         * @constructor
         * @param {IChunkInfo=} [properties] Properties to set
         */
        function ChunkInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ChunkInfo index.
         * @member {number} index
         * @memberof ChunkInfo
         * @instance
         */
        ChunkInfo.prototype.index = 0;
    
        /**
         * ChunkInfo size.
         * @member {number} size
         * @memberof ChunkInfo
         * @instance
         */
        ChunkInfo.prototype.size = 0;
    
        /**
         * ChunkInfo hash.
         * @member {Uint8Array} hash
         * @memberof ChunkInfo
         * @instance
         */
        ChunkInfo.prototype.hash = $util.newBuffer([]);
    
        /**
         * Creates a new ChunkInfo instance using the specified properties.
         * @function create
         * @memberof ChunkInfo
         * @static
         * @param {IChunkInfo=} [properties] Properties to set
         * @returns {ChunkInfo} ChunkInfo instance
         */
        ChunkInfo.create = function create(properties) {
            return new ChunkInfo(properties);
        };
    
        /**
         * Encodes the specified ChunkInfo message. Does not implicitly {@link ChunkInfo.verify|verify} messages.
         * @function encode
         * @memberof ChunkInfo
         * @static
         * @param {IChunkInfo} message ChunkInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunkInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.size);
            if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.hash);
            return writer;
        };
    
        /**
         * Encodes the specified ChunkInfo message, length delimited. Does not implicitly {@link ChunkInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChunkInfo
         * @static
         * @param {IChunkInfo} message ChunkInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunkInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ChunkInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ChunkInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChunkInfo} ChunkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunkInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChunkInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.size = reader.uint32();
                    break;
                case 3:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ChunkInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChunkInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChunkInfo} ChunkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunkInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ChunkInfo message.
         * @function verify
         * @memberof ChunkInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChunkInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.hash != null && message.hasOwnProperty("hash"))
                if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                    return "hash: buffer expected";
            return null;
        };
    
        /**
         * Creates a ChunkInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChunkInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChunkInfo} ChunkInfo
         */
        ChunkInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.ChunkInfo)
                return object;
            var message = new $root.ChunkInfo();
            if (object.index != null)
                message.index = object.index >>> 0;
            if (object.size != null)
                message.size = object.size >>> 0;
            if (object.hash != null)
                if (typeof object.hash === "string")
                    $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                else if (object.hash.length)
                    message.hash = object.hash;
            return message;
        };
    
        /**
         * Creates a plain object from a ChunkInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChunkInfo
         * @static
         * @param {ChunkInfo} message ChunkInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChunkInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.index = 0;
                object.size = 0;
                if (options.bytes === String)
                    object.hash = "";
                else {
                    object.hash = [];
                    if (options.bytes !== Array)
                        object.hash = $util.newBuffer(object.hash);
                }
            }
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.hash != null && message.hasOwnProperty("hash"))
                object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
            return object;
        };
    
        /**
         * Converts this ChunkInfo to JSON.
         * @function toJSON
         * @memberof ChunkInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChunkInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ChunkInfo;
    })();
    
    $root.FileInfo = (function() {
    
        /**
         * Properties of a FileInfo.
         * @exports IFileInfo
         * @interface IFileInfo
         * @property {Uint8Array|null} [hash] FileInfo hash
         * @property {number|null} [size] FileInfo size
         * @property {string|null} [filename] FileInfo filename
         * @property {Array.<IChunkInfo>|null} [chunks] FileInfo chunks
         */
    
        /**
         * Constructs a new FileInfo.
         * @exports FileInfo
         * @classdesc Represents a FileInfo.
         * @implements IFileInfo
         * @constructor
         * @param {IFileInfo=} [properties] Properties to set
         */
        function FileInfo(properties) {
            this.chunks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * FileInfo hash.
         * @member {Uint8Array} hash
         * @memberof FileInfo
         * @instance
         */
        FileInfo.prototype.hash = $util.newBuffer([]);
    
        /**
         * FileInfo size.
         * @member {number} size
         * @memberof FileInfo
         * @instance
         */
        FileInfo.prototype.size = 0;
    
        /**
         * FileInfo filename.
         * @member {string} filename
         * @memberof FileInfo
         * @instance
         */
        FileInfo.prototype.filename = "";
    
        /**
         * FileInfo chunks.
         * @member {Array.<IChunkInfo>} chunks
         * @memberof FileInfo
         * @instance
         */
        FileInfo.prototype.chunks = $util.emptyArray;
    
        /**
         * Creates a new FileInfo instance using the specified properties.
         * @function create
         * @memberof FileInfo
         * @static
         * @param {IFileInfo=} [properties] Properties to set
         * @returns {FileInfo} FileInfo instance
         */
        FileInfo.create = function create(properties) {
            return new FileInfo(properties);
        };
    
        /**
         * Encodes the specified FileInfo message. Does not implicitly {@link FileInfo.verify|verify} messages.
         * @function encode
         * @memberof FileInfo
         * @static
         * @param {IFileInfo} message FileInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.size);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.filename);
            if (message.chunks != null && message.chunks.length)
                for (var i = 0; i < message.chunks.length; ++i)
                    $root.ChunkInfo.encode(message.chunks[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link FileInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FileInfo
         * @static
         * @param {IFileInfo} message FileInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a FileInfo message from the specified reader or buffer.
         * @function decode
         * @memberof FileInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FileInfo} FileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.size = reader.uint32();
                    break;
                case 3:
                    message.filename = reader.string();
                    break;
                case 4:
                    if (!(message.chunks && message.chunks.length))
                        message.chunks = [];
                    message.chunks.push($root.ChunkInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a FileInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FileInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FileInfo} FileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a FileInfo message.
         * @function verify
         * @memberof FileInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hash != null && message.hasOwnProperty("hash"))
                if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                    return "hash: buffer expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.chunks != null && message.hasOwnProperty("chunks")) {
                if (!Array.isArray(message.chunks))
                    return "chunks: array expected";
                for (var i = 0; i < message.chunks.length; ++i) {
                    var error = $root.ChunkInfo.verify(message.chunks[i]);
                    if (error)
                        return "chunks." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof FileInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {FileInfo} FileInfo
         */
        FileInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.FileInfo)
                return object;
            var message = new $root.FileInfo();
            if (object.hash != null)
                if (typeof object.hash === "string")
                    $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                else if (object.hash.length)
                    message.hash = object.hash;
            if (object.size != null)
                message.size = object.size >>> 0;
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.chunks) {
                if (!Array.isArray(object.chunks))
                    throw TypeError(".FileInfo.chunks: array expected");
                message.chunks = [];
                for (var i = 0; i < object.chunks.length; ++i) {
                    if (typeof object.chunks[i] !== "object")
                        throw TypeError(".FileInfo.chunks: object expected");
                    message.chunks[i] = $root.ChunkInfo.fromObject(object.chunks[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof FileInfo
         * @static
         * @param {FileInfo} message FileInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.chunks = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.hash = "";
                else {
                    object.hash = [];
                    if (options.bytes !== Array)
                        object.hash = $util.newBuffer(object.hash);
                }
                object.size = 0;
                object.filename = "";
            }
            if (message.hash != null && message.hasOwnProperty("hash"))
                object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.chunks && message.chunks.length) {
                object.chunks = [];
                for (var j = 0; j < message.chunks.length; ++j)
                    object.chunks[j] = $root.ChunkInfo.toObject(message.chunks[j], options);
            }
            return object;
        };
    
        /**
         * Converts this FileInfo to JSON.
         * @function toJSON
         * @memberof FileInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return FileInfo;
    })();
    
    $root.NodeReplicationStatus = (function() {
    
        /**
         * Properties of a NodeReplicationStatus.
         * @exports INodeReplicationStatus
         * @interface INodeReplicationStatus
         * @property {INodeId|null} [node] NodeReplicationStatus node
         * @property {number|null} [chunkIndex] NodeReplicationStatus chunkIndex
         * @property {Status|null} [status] NodeReplicationStatus status
         * @property {string|null} [errorMessage] NodeReplicationStatus errorMessage
         */
    
        /**
         * Constructs a new NodeReplicationStatus.
         * @exports NodeReplicationStatus
         * @classdesc Represents a NodeReplicationStatus.
         * @implements INodeReplicationStatus
         * @constructor
         * @param {INodeReplicationStatus=} [properties] Properties to set
         */
        function NodeReplicationStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NodeReplicationStatus node.
         * @member {INodeId|null|undefined} node
         * @memberof NodeReplicationStatus
         * @instance
         */
        NodeReplicationStatus.prototype.node = null;
    
        /**
         * NodeReplicationStatus chunkIndex.
         * @member {number} chunkIndex
         * @memberof NodeReplicationStatus
         * @instance
         */
        NodeReplicationStatus.prototype.chunkIndex = 0;
    
        /**
         * NodeReplicationStatus status.
         * @member {Status} status
         * @memberof NodeReplicationStatus
         * @instance
         */
        NodeReplicationStatus.prototype.status = 0;
    
        /**
         * NodeReplicationStatus errorMessage.
         * @member {string} errorMessage
         * @memberof NodeReplicationStatus
         * @instance
         */
        NodeReplicationStatus.prototype.errorMessage = "";
    
        /**
         * Creates a new NodeReplicationStatus instance using the specified properties.
         * @function create
         * @memberof NodeReplicationStatus
         * @static
         * @param {INodeReplicationStatus=} [properties] Properties to set
         * @returns {NodeReplicationStatus} NodeReplicationStatus instance
         */
        NodeReplicationStatus.create = function create(properties) {
            return new NodeReplicationStatus(properties);
        };
    
        /**
         * Encodes the specified NodeReplicationStatus message. Does not implicitly {@link NodeReplicationStatus.verify|verify} messages.
         * @function encode
         * @memberof NodeReplicationStatus
         * @static
         * @param {INodeReplicationStatus} message NodeReplicationStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeReplicationStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.node != null && Object.hasOwnProperty.call(message, "node"))
                $root.NodeId.encode(message.node, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.chunkIndex != null && Object.hasOwnProperty.call(message, "chunkIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.chunkIndex);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.errorMessage);
            return writer;
        };
    
        /**
         * Encodes the specified NodeReplicationStatus message, length delimited. Does not implicitly {@link NodeReplicationStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NodeReplicationStatus
         * @static
         * @param {INodeReplicationStatus} message NodeReplicationStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeReplicationStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NodeReplicationStatus message from the specified reader or buffer.
         * @function decode
         * @memberof NodeReplicationStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NodeReplicationStatus} NodeReplicationStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeReplicationStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NodeReplicationStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.node = $root.NodeId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chunkIndex = reader.uint32();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.errorMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a NodeReplicationStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NodeReplicationStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NodeReplicationStatus} NodeReplicationStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeReplicationStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NodeReplicationStatus message.
         * @function verify
         * @memberof NodeReplicationStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeReplicationStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.node != null && message.hasOwnProperty("node")) {
                var error = $root.NodeId.verify(message.node);
                if (error)
                    return "node." + error;
            }
            if (message.chunkIndex != null && message.hasOwnProperty("chunkIndex"))
                if (!$util.isInteger(message.chunkIndex))
                    return "chunkIndex: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };
    
        /**
         * Creates a NodeReplicationStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NodeReplicationStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NodeReplicationStatus} NodeReplicationStatus
         */
        NodeReplicationStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.NodeReplicationStatus)
                return object;
            var message = new $root.NodeReplicationStatus();
            if (object.node != null) {
                if (typeof object.node !== "object")
                    throw TypeError(".NodeReplicationStatus.node: object expected");
                message.node = $root.NodeId.fromObject(object.node);
            }
            if (object.chunkIndex != null)
                message.chunkIndex = object.chunkIndex >>> 0;
            switch (object.status) {
            case "SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "UNABLE_TO_COMPLETE":
            case 1:
                message.status = 1;
                break;
            case "MESSAGE_ERROR":
            case 2:
                message.status = 2;
                break;
            case "NETWORK_ERROR":
            case 3:
                message.status = 3;
                break;
            case "PROCESSING_ERROR":
            case 4:
                message.status = 4;
                break;
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };
    
        /**
         * Creates a plain object from a NodeReplicationStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NodeReplicationStatus
         * @static
         * @param {NodeReplicationStatus} message NodeReplicationStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeReplicationStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.node = null;
                object.chunkIndex = 0;
                object.status = options.enums === String ? "SUCCESS" : 0;
                object.errorMessage = "";
            }
            if (message.node != null && message.hasOwnProperty("node"))
                object.node = $root.NodeId.toObject(message.node, options);
            if (message.chunkIndex != null && message.hasOwnProperty("chunkIndex"))
                object.chunkIndex = message.chunkIndex;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.Status[message.status] : message.status;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };
    
        /**
         * Converts this NodeReplicationStatus to JSON.
         * @function toJSON
         * @memberof NodeReplicationStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeReplicationStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return NodeReplicationStatus;
    })();
    
    $root.NodeSearchResult = (function() {
    
        /**
         * Properties of a NodeSearchResult.
         * @exports INodeSearchResult
         * @interface INodeSearchResult
         * @property {INodeId|null} [node] NodeSearchResult node
         * @property {Status|null} [status] NodeSearchResult status
         * @property {string|null} [errorMessage] NodeSearchResult errorMessage
         * @property {Array.<IFileInfo>|null} [files] NodeSearchResult files
         */
    
        /**
         * Constructs a new NodeSearchResult.
         * @exports NodeSearchResult
         * @classdesc Represents a NodeSearchResult.
         * @implements INodeSearchResult
         * @constructor
         * @param {INodeSearchResult=} [properties] Properties to set
         */
        function NodeSearchResult(properties) {
            this.files = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NodeSearchResult node.
         * @member {INodeId|null|undefined} node
         * @memberof NodeSearchResult
         * @instance
         */
        NodeSearchResult.prototype.node = null;
    
        /**
         * NodeSearchResult status.
         * @member {Status} status
         * @memberof NodeSearchResult
         * @instance
         */
        NodeSearchResult.prototype.status = 0;
    
        /**
         * NodeSearchResult errorMessage.
         * @member {string} errorMessage
         * @memberof NodeSearchResult
         * @instance
         */
        NodeSearchResult.prototype.errorMessage = "";
    
        /**
         * NodeSearchResult files.
         * @member {Array.<IFileInfo>} files
         * @memberof NodeSearchResult
         * @instance
         */
        NodeSearchResult.prototype.files = $util.emptyArray;
    
        /**
         * Creates a new NodeSearchResult instance using the specified properties.
         * @function create
         * @memberof NodeSearchResult
         * @static
         * @param {INodeSearchResult=} [properties] Properties to set
         * @returns {NodeSearchResult} NodeSearchResult instance
         */
        NodeSearchResult.create = function create(properties) {
            return new NodeSearchResult(properties);
        };
    
        /**
         * Encodes the specified NodeSearchResult message. Does not implicitly {@link NodeSearchResult.verify|verify} messages.
         * @function encode
         * @memberof NodeSearchResult
         * @static
         * @param {INodeSearchResult} message NodeSearchResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeSearchResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.node != null && Object.hasOwnProperty.call(message, "node"))
                $root.NodeId.encode(message.node, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorMessage);
            if (message.files != null && message.files.length)
                for (var i = 0; i < message.files.length; ++i)
                    $root.FileInfo.encode(message.files[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified NodeSearchResult message, length delimited. Does not implicitly {@link NodeSearchResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NodeSearchResult
         * @static
         * @param {INodeSearchResult} message NodeSearchResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeSearchResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NodeSearchResult message from the specified reader or buffer.
         * @function decode
         * @memberof NodeSearchResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NodeSearchResult} NodeSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeSearchResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NodeSearchResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.node = $root.NodeId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.errorMessage = reader.string();
                    break;
                case 4:
                    if (!(message.files && message.files.length))
                        message.files = [];
                    message.files.push($root.FileInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a NodeSearchResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NodeSearchResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NodeSearchResult} NodeSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeSearchResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NodeSearchResult message.
         * @function verify
         * @memberof NodeSearchResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeSearchResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.node != null && message.hasOwnProperty("node")) {
                var error = $root.NodeId.verify(message.node);
                if (error)
                    return "node." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.files != null && message.hasOwnProperty("files")) {
                if (!Array.isArray(message.files))
                    return "files: array expected";
                for (var i = 0; i < message.files.length; ++i) {
                    var error = $root.FileInfo.verify(message.files[i]);
                    if (error)
                        return "files." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a NodeSearchResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NodeSearchResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NodeSearchResult} NodeSearchResult
         */
        NodeSearchResult.fromObject = function fromObject(object) {
            if (object instanceof $root.NodeSearchResult)
                return object;
            var message = new $root.NodeSearchResult();
            if (object.node != null) {
                if (typeof object.node !== "object")
                    throw TypeError(".NodeSearchResult.node: object expected");
                message.node = $root.NodeId.fromObject(object.node);
            }
            switch (object.status) {
            case "SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "UNABLE_TO_COMPLETE":
            case 1:
                message.status = 1;
                break;
            case "MESSAGE_ERROR":
            case 2:
                message.status = 2;
                break;
            case "NETWORK_ERROR":
            case 3:
                message.status = 3;
                break;
            case "PROCESSING_ERROR":
            case 4:
                message.status = 4;
                break;
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.files) {
                if (!Array.isArray(object.files))
                    throw TypeError(".NodeSearchResult.files: array expected");
                message.files = [];
                for (var i = 0; i < object.files.length; ++i) {
                    if (typeof object.files[i] !== "object")
                        throw TypeError(".NodeSearchResult.files: object expected");
                    message.files[i] = $root.FileInfo.fromObject(object.files[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a NodeSearchResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NodeSearchResult
         * @static
         * @param {NodeSearchResult} message NodeSearchResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeSearchResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.files = [];
            if (options.defaults) {
                object.node = null;
                object.status = options.enums === String ? "SUCCESS" : 0;
                object.errorMessage = "";
            }
            if (message.node != null && message.hasOwnProperty("node"))
                object.node = $root.NodeId.toObject(message.node, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.Status[message.status] : message.status;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.files && message.files.length) {
                object.files = [];
                for (var j = 0; j < message.files.length; ++j)
                    object.files[j] = $root.FileInfo.toObject(message.files[j], options);
            }
            return object;
        };
    
        /**
         * Converts this NodeSearchResult to JSON.
         * @function toJSON
         * @memberof NodeSearchResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeSearchResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return NodeSearchResult;
    })();
    
    $root.RegistrationRequest = (function() {
    
        /**
         * Properties of a RegistrationRequest.
         * @exports IRegistrationRequest
         * @interface IRegistrationRequest
         * @property {string|null} [owner] RegistrationRequest owner
         * @property {number|null} [index] RegistrationRequest index
         * @property {number|null} [port] RegistrationRequest port
         */
    
        /**
         * Constructs a new RegistrationRequest.
         * @exports RegistrationRequest
         * @classdesc Represents a RegistrationRequest.
         * @implements IRegistrationRequest
         * @constructor
         * @param {IRegistrationRequest=} [properties] Properties to set
         */
        function RegistrationRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RegistrationRequest owner.
         * @member {string} owner
         * @memberof RegistrationRequest
         * @instance
         */
        RegistrationRequest.prototype.owner = "";
    
        /**
         * RegistrationRequest index.
         * @member {number} index
         * @memberof RegistrationRequest
         * @instance
         */
        RegistrationRequest.prototype.index = 0;
    
        /**
         * RegistrationRequest port.
         * @member {number} port
         * @memberof RegistrationRequest
         * @instance
         */
        RegistrationRequest.prototype.port = 0;
    
        /**
         * Creates a new RegistrationRequest instance using the specified properties.
         * @function create
         * @memberof RegistrationRequest
         * @static
         * @param {IRegistrationRequest=} [properties] Properties to set
         * @returns {RegistrationRequest} RegistrationRequest instance
         */
        RegistrationRequest.create = function create(properties) {
            return new RegistrationRequest(properties);
        };
    
        /**
         * Encodes the specified RegistrationRequest message. Does not implicitly {@link RegistrationRequest.verify|verify} messages.
         * @function encode
         * @memberof RegistrationRequest
         * @static
         * @param {IRegistrationRequest} message RegistrationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistrationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.owner);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.port);
            return writer;
        };
    
        /**
         * Encodes the specified RegistrationRequest message, length delimited. Does not implicitly {@link RegistrationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RegistrationRequest
         * @static
         * @param {IRegistrationRequest} message RegistrationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistrationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RegistrationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof RegistrationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RegistrationRequest} RegistrationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistrationRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RegistrationRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.index = reader.int32();
                    break;
                case 3:
                    message.port = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a RegistrationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RegistrationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RegistrationRequest} RegistrationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistrationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RegistrationRequest message.
         * @function verify
         * @memberof RegistrationRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegistrationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isString(message.owner))
                    return "owner: string expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            return null;
        };
    
        /**
         * Creates a RegistrationRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RegistrationRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RegistrationRequest} RegistrationRequest
         */
        RegistrationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.RegistrationRequest)
                return object;
            var message = new $root.RegistrationRequest();
            if (object.owner != null)
                message.owner = String(object.owner);
            if (object.index != null)
                message.index = object.index | 0;
            if (object.port != null)
                message.port = object.port | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a RegistrationRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RegistrationRequest
         * @static
         * @param {RegistrationRequest} message RegistrationRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegistrationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.owner = "";
                object.index = 0;
                object.port = 0;
            }
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            return object;
        };
    
        /**
         * Converts this RegistrationRequest to JSON.
         * @function toJSON
         * @memberof RegistrationRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegistrationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RegistrationRequest;
    })();
    
    $root.RegistrationResponse = (function() {
    
        /**
         * Properties of a RegistrationResponse.
         * @exports IRegistrationResponse
         * @interface IRegistrationResponse
         * @property {Status|null} [status] RegistrationResponse status
         * @property {string|null} [errorMessage] RegistrationResponse errorMessage
         */
    
        /**
         * Constructs a new RegistrationResponse.
         * @exports RegistrationResponse
         * @classdesc Represents a RegistrationResponse.
         * @implements IRegistrationResponse
         * @constructor
         * @param {IRegistrationResponse=} [properties] Properties to set
         */
        function RegistrationResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RegistrationResponse status.
         * @member {Status} status
         * @memberof RegistrationResponse
         * @instance
         */
        RegistrationResponse.prototype.status = 0;
    
        /**
         * RegistrationResponse errorMessage.
         * @member {string} errorMessage
         * @memberof RegistrationResponse
         * @instance
         */
        RegistrationResponse.prototype.errorMessage = "";
    
        /**
         * Creates a new RegistrationResponse instance using the specified properties.
         * @function create
         * @memberof RegistrationResponse
         * @static
         * @param {IRegistrationResponse=} [properties] Properties to set
         * @returns {RegistrationResponse} RegistrationResponse instance
         */
        RegistrationResponse.create = function create(properties) {
            return new RegistrationResponse(properties);
        };
    
        /**
         * Encodes the specified RegistrationResponse message. Does not implicitly {@link RegistrationResponse.verify|verify} messages.
         * @function encode
         * @memberof RegistrationResponse
         * @static
         * @param {IRegistrationResponse} message RegistrationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistrationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            return writer;
        };
    
        /**
         * Encodes the specified RegistrationResponse message, length delimited. Does not implicitly {@link RegistrationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RegistrationResponse
         * @static
         * @param {IRegistrationResponse} message RegistrationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistrationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RegistrationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof RegistrationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RegistrationResponse} RegistrationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistrationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RegistrationResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a RegistrationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RegistrationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RegistrationResponse} RegistrationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistrationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RegistrationResponse message.
         * @function verify
         * @memberof RegistrationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegistrationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };
    
        /**
         * Creates a RegistrationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RegistrationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RegistrationResponse} RegistrationResponse
         */
        RegistrationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.RegistrationResponse)
                return object;
            var message = new $root.RegistrationResponse();
            switch (object.status) {
            case "SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "UNABLE_TO_COMPLETE":
            case 1:
                message.status = 1;
                break;
            case "MESSAGE_ERROR":
            case 2:
                message.status = 2;
                break;
            case "NETWORK_ERROR":
            case 3:
                message.status = 3;
                break;
            case "PROCESSING_ERROR":
            case 4:
                message.status = 4;
                break;
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };
    
        /**
         * Creates a plain object from a RegistrationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RegistrationResponse
         * @static
         * @param {RegistrationResponse} message RegistrationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegistrationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "SUCCESS" : 0;
                object.errorMessage = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.Status[message.status] : message.status;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };
    
        /**
         * Converts this RegistrationResponse to JSON.
         * @function toJSON
         * @memberof RegistrationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegistrationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return RegistrationResponse;
    })();
    
    $root.SubnetRequest = (function() {
    
        /**
         * Properties of a SubnetRequest.
         * @exports ISubnetRequest
         * @interface ISubnetRequest
         * @property {number|null} [subnetId] SubnetRequest subnetId
         */
    
        /**
         * Constructs a new SubnetRequest.
         * @exports SubnetRequest
         * @classdesc Represents a SubnetRequest.
         * @implements ISubnetRequest
         * @constructor
         * @param {ISubnetRequest=} [properties] Properties to set
         */
        function SubnetRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SubnetRequest subnetId.
         * @member {number} subnetId
         * @memberof SubnetRequest
         * @instance
         */
        SubnetRequest.prototype.subnetId = 0;
    
        /**
         * Creates a new SubnetRequest instance using the specified properties.
         * @function create
         * @memberof SubnetRequest
         * @static
         * @param {ISubnetRequest=} [properties] Properties to set
         * @returns {SubnetRequest} SubnetRequest instance
         */
        SubnetRequest.create = function create(properties) {
            return new SubnetRequest(properties);
        };
    
        /**
         * Encodes the specified SubnetRequest message. Does not implicitly {@link SubnetRequest.verify|verify} messages.
         * @function encode
         * @memberof SubnetRequest
         * @static
         * @param {ISubnetRequest} message SubnetRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubnetRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subnetId != null && Object.hasOwnProperty.call(message, "subnetId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.subnetId);
            return writer;
        };
    
        /**
         * Encodes the specified SubnetRequest message, length delimited. Does not implicitly {@link SubnetRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SubnetRequest
         * @static
         * @param {ISubnetRequest} message SubnetRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubnetRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SubnetRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SubnetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SubnetRequest} SubnetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubnetRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SubnetRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SubnetRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SubnetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SubnetRequest} SubnetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubnetRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SubnetRequest message.
         * @function verify
         * @memberof SubnetRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubnetRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subnetId != null && message.hasOwnProperty("subnetId"))
                if (!$util.isInteger(message.subnetId))
                    return "subnetId: integer expected";
            return null;
        };
    
        /**
         * Creates a SubnetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SubnetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SubnetRequest} SubnetRequest
         */
        SubnetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SubnetRequest)
                return object;
            var message = new $root.SubnetRequest();
            if (object.subnetId != null)
                message.subnetId = object.subnetId | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a SubnetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SubnetRequest
         * @static
         * @param {SubnetRequest} message SubnetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubnetRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.subnetId = 0;
            if (message.subnetId != null && message.hasOwnProperty("subnetId"))
                object.subnetId = message.subnetId;
            return object;
        };
    
        /**
         * Converts this SubnetRequest to JSON.
         * @function toJSON
         * @memberof SubnetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubnetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SubnetRequest;
    })();
    
    $root.SubnetResponse = (function() {
    
        /**
         * Properties of a SubnetResponse.
         * @exports ISubnetResponse
         * @interface ISubnetResponse
         * @property {Status|null} [status] SubnetResponse status
         * @property {string|null} [errorMessage] SubnetResponse errorMessage
         * @property {Array.<INodeId>|null} [nodes] SubnetResponse nodes
         */
    
        /**
         * Constructs a new SubnetResponse.
         * @exports SubnetResponse
         * @classdesc Represents a SubnetResponse.
         * @implements ISubnetResponse
         * @constructor
         * @param {ISubnetResponse=} [properties] Properties to set
         */
        function SubnetResponse(properties) {
            this.nodes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SubnetResponse status.
         * @member {Status} status
         * @memberof SubnetResponse
         * @instance
         */
        SubnetResponse.prototype.status = 0;
    
        /**
         * SubnetResponse errorMessage.
         * @member {string} errorMessage
         * @memberof SubnetResponse
         * @instance
         */
        SubnetResponse.prototype.errorMessage = "";
    
        /**
         * SubnetResponse nodes.
         * @member {Array.<INodeId>} nodes
         * @memberof SubnetResponse
         * @instance
         */
        SubnetResponse.prototype.nodes = $util.emptyArray;
    
        /**
         * Creates a new SubnetResponse instance using the specified properties.
         * @function create
         * @memberof SubnetResponse
         * @static
         * @param {ISubnetResponse=} [properties] Properties to set
         * @returns {SubnetResponse} SubnetResponse instance
         */
        SubnetResponse.create = function create(properties) {
            return new SubnetResponse(properties);
        };
    
        /**
         * Encodes the specified SubnetResponse message. Does not implicitly {@link SubnetResponse.verify|verify} messages.
         * @function encode
         * @memberof SubnetResponse
         * @static
         * @param {ISubnetResponse} message SubnetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubnetResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.nodes != null && message.nodes.length)
                for (var i = 0; i < message.nodes.length; ++i)
                    $root.NodeId.encode(message.nodes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified SubnetResponse message, length delimited. Does not implicitly {@link SubnetResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SubnetResponse
         * @static
         * @param {ISubnetResponse} message SubnetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubnetResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SubnetResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SubnetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SubnetResponse} SubnetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubnetResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SubnetResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                case 3:
                    if (!(message.nodes && message.nodes.length))
                        message.nodes = [];
                    message.nodes.push($root.NodeId.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SubnetResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SubnetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SubnetResponse} SubnetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubnetResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SubnetResponse message.
         * @function verify
         * @memberof SubnetResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubnetResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.nodes != null && message.hasOwnProperty("nodes")) {
                if (!Array.isArray(message.nodes))
                    return "nodes: array expected";
                for (var i = 0; i < message.nodes.length; ++i) {
                    var error = $root.NodeId.verify(message.nodes[i]);
                    if (error)
                        return "nodes." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a SubnetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SubnetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SubnetResponse} SubnetResponse
         */
        SubnetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SubnetResponse)
                return object;
            var message = new $root.SubnetResponse();
            switch (object.status) {
            case "SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "UNABLE_TO_COMPLETE":
            case 1:
                message.status = 1;
                break;
            case "MESSAGE_ERROR":
            case 2:
                message.status = 2;
                break;
            case "NETWORK_ERROR":
            case 3:
                message.status = 3;
                break;
            case "PROCESSING_ERROR":
            case 4:
                message.status = 4;
                break;
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.nodes) {
                if (!Array.isArray(object.nodes))
                    throw TypeError(".SubnetResponse.nodes: array expected");
                message.nodes = [];
                for (var i = 0; i < object.nodes.length; ++i) {
                    if (typeof object.nodes[i] !== "object")
                        throw TypeError(".SubnetResponse.nodes: object expected");
                    message.nodes[i] = $root.NodeId.fromObject(object.nodes[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a SubnetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SubnetResponse
         * @static
         * @param {SubnetResponse} message SubnetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubnetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.nodes = [];
            if (options.defaults) {
                object.status = options.enums === String ? "SUCCESS" : 0;
                object.errorMessage = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.Status[message.status] : message.status;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.nodes && message.nodes.length) {
                object.nodes = [];
                for (var j = 0; j < message.nodes.length; ++j)
                    object.nodes[j] = $root.NodeId.toObject(message.nodes[j], options);
            }
            return object;
        };
    
        /**
         * Converts this SubnetResponse to JSON.
         * @function toJSON
         * @memberof SubnetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubnetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SubnetResponse;
    })();
    
    $root.LocalSearchRequest = (function() {
    
        /**
         * Properties of a LocalSearchRequest.
         * @exports ILocalSearchRequest
         * @interface ILocalSearchRequest
         * @property {string|null} [regex] LocalSearchRequest regex
         */
    
        /**
         * Constructs a new LocalSearchRequest.
         * @exports LocalSearchRequest
         * @classdesc Represents a LocalSearchRequest.
         * @implements ILocalSearchRequest
         * @constructor
         * @param {ILocalSearchRequest=} [properties] Properties to set
         */
        function LocalSearchRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * LocalSearchRequest regex.
         * @member {string} regex
         * @memberof LocalSearchRequest
         * @instance
         */
        LocalSearchRequest.prototype.regex = "";
    
        /**
         * Creates a new LocalSearchRequest instance using the specified properties.
         * @function create
         * @memberof LocalSearchRequest
         * @static
         * @param {ILocalSearchRequest=} [properties] Properties to set
         * @returns {LocalSearchRequest} LocalSearchRequest instance
         */
        LocalSearchRequest.create = function create(properties) {
            return new LocalSearchRequest(properties);
        };
    
        /**
         * Encodes the specified LocalSearchRequest message. Does not implicitly {@link LocalSearchRequest.verify|verify} messages.
         * @function encode
         * @memberof LocalSearchRequest
         * @static
         * @param {ILocalSearchRequest} message LocalSearchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocalSearchRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.regex != null && Object.hasOwnProperty.call(message, "regex"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.regex);
            return writer;
        };
    
        /**
         * Encodes the specified LocalSearchRequest message, length delimited. Does not implicitly {@link LocalSearchRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LocalSearchRequest
         * @static
         * @param {ILocalSearchRequest} message LocalSearchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocalSearchRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a LocalSearchRequest message from the specified reader or buffer.
         * @function decode
         * @memberof LocalSearchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LocalSearchRequest} LocalSearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocalSearchRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LocalSearchRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.regex = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a LocalSearchRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LocalSearchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LocalSearchRequest} LocalSearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocalSearchRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a LocalSearchRequest message.
         * @function verify
         * @memberof LocalSearchRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LocalSearchRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.regex != null && message.hasOwnProperty("regex"))
                if (!$util.isString(message.regex))
                    return "regex: string expected";
            return null;
        };
    
        /**
         * Creates a LocalSearchRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LocalSearchRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LocalSearchRequest} LocalSearchRequest
         */
        LocalSearchRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.LocalSearchRequest)
                return object;
            var message = new $root.LocalSearchRequest();
            if (object.regex != null)
                message.regex = String(object.regex);
            return message;
        };
    
        /**
         * Creates a plain object from a LocalSearchRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LocalSearchRequest
         * @static
         * @param {LocalSearchRequest} message LocalSearchRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LocalSearchRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.regex = "";
            if (message.regex != null && message.hasOwnProperty("regex"))
                object.regex = message.regex;
            return object;
        };
    
        /**
         * Converts this LocalSearchRequest to JSON.
         * @function toJSON
         * @memberof LocalSearchRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LocalSearchRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return LocalSearchRequest;
    })();
    
    $root.LocalSearchResponse = (function() {
    
        /**
         * Properties of a LocalSearchResponse.
         * @exports ILocalSearchResponse
         * @interface ILocalSearchResponse
         * @property {Status|null} [status] LocalSearchResponse status
         * @property {string|null} [errorMessage] LocalSearchResponse errorMessage
         * @property {Array.<IFileInfo>|null} [fileInfo] LocalSearchResponse fileInfo
         */
    
        /**
         * Constructs a new LocalSearchResponse.
         * @exports LocalSearchResponse
         * @classdesc Represents a LocalSearchResponse.
         * @implements ILocalSearchResponse
         * @constructor
         * @param {ILocalSearchResponse=} [properties] Properties to set
         */
        function LocalSearchResponse(properties) {
            this.fileInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * LocalSearchResponse status.
         * @member {Status} status
         * @memberof LocalSearchResponse
         * @instance
         */
        LocalSearchResponse.prototype.status = 0;
    
        /**
         * LocalSearchResponse errorMessage.
         * @member {string} errorMessage
         * @memberof LocalSearchResponse
         * @instance
         */
        LocalSearchResponse.prototype.errorMessage = "";
    
        /**
         * LocalSearchResponse fileInfo.
         * @member {Array.<IFileInfo>} fileInfo
         * @memberof LocalSearchResponse
         * @instance
         */
        LocalSearchResponse.prototype.fileInfo = $util.emptyArray;
    
        /**
         * Creates a new LocalSearchResponse instance using the specified properties.
         * @function create
         * @memberof LocalSearchResponse
         * @static
         * @param {ILocalSearchResponse=} [properties] Properties to set
         * @returns {LocalSearchResponse} LocalSearchResponse instance
         */
        LocalSearchResponse.create = function create(properties) {
            return new LocalSearchResponse(properties);
        };
    
        /**
         * Encodes the specified LocalSearchResponse message. Does not implicitly {@link LocalSearchResponse.verify|verify} messages.
         * @function encode
         * @memberof LocalSearchResponse
         * @static
         * @param {ILocalSearchResponse} message LocalSearchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocalSearchResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.fileInfo != null && message.fileInfo.length)
                for (var i = 0; i < message.fileInfo.length; ++i)
                    $root.FileInfo.encode(message.fileInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified LocalSearchResponse message, length delimited. Does not implicitly {@link LocalSearchResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LocalSearchResponse
         * @static
         * @param {ILocalSearchResponse} message LocalSearchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocalSearchResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a LocalSearchResponse message from the specified reader or buffer.
         * @function decode
         * @memberof LocalSearchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LocalSearchResponse} LocalSearchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocalSearchResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LocalSearchResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                case 3:
                    if (!(message.fileInfo && message.fileInfo.length))
                        message.fileInfo = [];
                    message.fileInfo.push($root.FileInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a LocalSearchResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LocalSearchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LocalSearchResponse} LocalSearchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocalSearchResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a LocalSearchResponse message.
         * @function verify
         * @memberof LocalSearchResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LocalSearchResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.fileInfo != null && message.hasOwnProperty("fileInfo")) {
                if (!Array.isArray(message.fileInfo))
                    return "fileInfo: array expected";
                for (var i = 0; i < message.fileInfo.length; ++i) {
                    var error = $root.FileInfo.verify(message.fileInfo[i]);
                    if (error)
                        return "fileInfo." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a LocalSearchResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LocalSearchResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LocalSearchResponse} LocalSearchResponse
         */
        LocalSearchResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.LocalSearchResponse)
                return object;
            var message = new $root.LocalSearchResponse();
            switch (object.status) {
            case "SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "UNABLE_TO_COMPLETE":
            case 1:
                message.status = 1;
                break;
            case "MESSAGE_ERROR":
            case 2:
                message.status = 2;
                break;
            case "NETWORK_ERROR":
            case 3:
                message.status = 3;
                break;
            case "PROCESSING_ERROR":
            case 4:
                message.status = 4;
                break;
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.fileInfo) {
                if (!Array.isArray(object.fileInfo))
                    throw TypeError(".LocalSearchResponse.fileInfo: array expected");
                message.fileInfo = [];
                for (var i = 0; i < object.fileInfo.length; ++i) {
                    if (typeof object.fileInfo[i] !== "object")
                        throw TypeError(".LocalSearchResponse.fileInfo: object expected");
                    message.fileInfo[i] = $root.FileInfo.fromObject(object.fileInfo[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a LocalSearchResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LocalSearchResponse
         * @static
         * @param {LocalSearchResponse} message LocalSearchResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LocalSearchResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.fileInfo = [];
            if (options.defaults) {
                object.status = options.enums === String ? "SUCCESS" : 0;
                object.errorMessage = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.Status[message.status] : message.status;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.fileInfo && message.fileInfo.length) {
                object.fileInfo = [];
                for (var j = 0; j < message.fileInfo.length; ++j)
                    object.fileInfo[j] = $root.FileInfo.toObject(message.fileInfo[j], options);
            }
            return object;
        };
    
        /**
         * Converts this LocalSearchResponse to JSON.
         * @function toJSON
         * @memberof LocalSearchResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LocalSearchResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return LocalSearchResponse;
    })();
    
    $root.SearchRequest = (function() {
    
        /**
         * Properties of a SearchRequest.
         * @exports ISearchRequest
         * @interface ISearchRequest
         * @property {string|null} [regex] SearchRequest regex
         * @property {number|null} [subnetId] SearchRequest subnetId
         */
    
        /**
         * Constructs a new SearchRequest.
         * @exports SearchRequest
         * @classdesc Represents a SearchRequest.
         * @implements ISearchRequest
         * @constructor
         * @param {ISearchRequest=} [properties] Properties to set
         */
        function SearchRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SearchRequest regex.
         * @member {string} regex
         * @memberof SearchRequest
         * @instance
         */
        SearchRequest.prototype.regex = "";
    
        /**
         * SearchRequest subnetId.
         * @member {number} subnetId
         * @memberof SearchRequest
         * @instance
         */
        SearchRequest.prototype.subnetId = 0;
    
        /**
         * Creates a new SearchRequest instance using the specified properties.
         * @function create
         * @memberof SearchRequest
         * @static
         * @param {ISearchRequest=} [properties] Properties to set
         * @returns {SearchRequest} SearchRequest instance
         */
        SearchRequest.create = function create(properties) {
            return new SearchRequest(properties);
        };
    
        /**
         * Encodes the specified SearchRequest message. Does not implicitly {@link SearchRequest.verify|verify} messages.
         * @function encode
         * @memberof SearchRequest
         * @static
         * @param {ISearchRequest} message SearchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.regex != null && Object.hasOwnProperty.call(message, "regex"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.regex);
            if (message.subnetId != null && Object.hasOwnProperty.call(message, "subnetId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.subnetId);
            return writer;
        };
    
        /**
         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link SearchRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SearchRequest
         * @static
         * @param {ISearchRequest} message SearchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SearchRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SearchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SearchRequest} SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SearchRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.regex = reader.string();
                    break;
                case 2:
                    message.subnetId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SearchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SearchRequest} SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SearchRequest message.
         * @function verify
         * @memberof SearchRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.regex != null && message.hasOwnProperty("regex"))
                if (!$util.isString(message.regex))
                    return "regex: string expected";
            if (message.subnetId != null && message.hasOwnProperty("subnetId"))
                if (!$util.isInteger(message.subnetId))
                    return "subnetId: integer expected";
            return null;
        };
    
        /**
         * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SearchRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SearchRequest} SearchRequest
         */
        SearchRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SearchRequest)
                return object;
            var message = new $root.SearchRequest();
            if (object.regex != null)
                message.regex = String(object.regex);
            if (object.subnetId != null)
                message.subnetId = object.subnetId | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SearchRequest
         * @static
         * @param {SearchRequest} message SearchRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SearchRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.regex = "";
                object.subnetId = 0;
            }
            if (message.regex != null && message.hasOwnProperty("regex"))
                object.regex = message.regex;
            if (message.subnetId != null && message.hasOwnProperty("subnetId"))
                object.subnetId = message.subnetId;
            return object;
        };
    
        /**
         * Converts this SearchRequest to JSON.
         * @function toJSON
         * @memberof SearchRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SearchRequest;
    })();
    
    $root.SearchResponse = (function() {
    
        /**
         * Properties of a SearchResponse.
         * @exports ISearchResponse
         * @interface ISearchResponse
         * @property {Status|null} [status] SearchResponse status
         * @property {string|null} [errorMessage] SearchResponse errorMessage
         * @property {Array.<INodeSearchResult>|null} [results] SearchResponse results
         */
    
        /**
         * Constructs a new SearchResponse.
         * @exports SearchResponse
         * @classdesc Represents a SearchResponse.
         * @implements ISearchResponse
         * @constructor
         * @param {ISearchResponse=} [properties] Properties to set
         */
        function SearchResponse(properties) {
            this.results = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SearchResponse status.
         * @member {Status} status
         * @memberof SearchResponse
         * @instance
         */
        SearchResponse.prototype.status = 0;
    
        /**
         * SearchResponse errorMessage.
         * @member {string} errorMessage
         * @memberof SearchResponse
         * @instance
         */
        SearchResponse.prototype.errorMessage = "";
    
        /**
         * SearchResponse results.
         * @member {Array.<INodeSearchResult>} results
         * @memberof SearchResponse
         * @instance
         */
        SearchResponse.prototype.results = $util.emptyArray;
    
        /**
         * Creates a new SearchResponse instance using the specified properties.
         * @function create
         * @memberof SearchResponse
         * @static
         * @param {ISearchResponse=} [properties] Properties to set
         * @returns {SearchResponse} SearchResponse instance
         */
        SearchResponse.create = function create(properties) {
            return new SearchResponse(properties);
        };
    
        /**
         * Encodes the specified SearchResponse message. Does not implicitly {@link SearchResponse.verify|verify} messages.
         * @function encode
         * @memberof SearchResponse
         * @static
         * @param {ISearchResponse} message SearchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.results != null && message.results.length)
                for (var i = 0; i < message.results.length; ++i)
                    $root.NodeSearchResult.encode(message.results[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link SearchResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SearchResponse
         * @static
         * @param {ISearchResponse} message SearchResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SearchResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SearchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SearchResponse} SearchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SearchResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                case 3:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push($root.NodeSearchResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SearchResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SearchResponse} SearchResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SearchResponse message.
         * @function verify
         * @memberof SearchResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (var i = 0; i < message.results.length; ++i) {
                    var error = $root.NodeSearchResult.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SearchResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SearchResponse} SearchResponse
         */
        SearchResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SearchResponse)
                return object;
            var message = new $root.SearchResponse();
            switch (object.status) {
            case "SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "UNABLE_TO_COMPLETE":
            case 1:
                message.status = 1;
                break;
            case "MESSAGE_ERROR":
            case 2:
                message.status = 2;
                break;
            case "NETWORK_ERROR":
            case 3:
                message.status = 3;
                break;
            case "PROCESSING_ERROR":
            case 4:
                message.status = 4;
                break;
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".SearchResponse.results: array expected");
                message.results = [];
                for (var i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".SearchResponse.results: object expected");
                    message.results[i] = $root.NodeSearchResult.fromObject(object.results[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SearchResponse
         * @static
         * @param {SearchResponse} message SearchResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SearchResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (options.defaults) {
                object.status = options.enums === String ? "SUCCESS" : 0;
                object.errorMessage = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.Status[message.status] : message.status;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.results && message.results.length) {
                object.results = [];
                for (var j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.NodeSearchResult.toObject(message.results[j], options);
            }
            return object;
        };
    
        /**
         * Converts this SearchResponse to JSON.
         * @function toJSON
         * @memberof SearchResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return SearchResponse;
    })();
    
    $root.UploadRequest = (function() {
    
        /**
         * Properties of an UploadRequest.
         * @exports IUploadRequest
         * @interface IUploadRequest
         * @property {string|null} [filename] UploadRequest filename
         * @property {Uint8Array|null} [data] UploadRequest data
         */
    
        /**
         * Constructs a new UploadRequest.
         * @exports UploadRequest
         * @classdesc Represents an UploadRequest.
         * @implements IUploadRequest
         * @constructor
         * @param {IUploadRequest=} [properties] Properties to set
         */
        function UploadRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UploadRequest filename.
         * @member {string} filename
         * @memberof UploadRequest
         * @instance
         */
        UploadRequest.prototype.filename = "";
    
        /**
         * UploadRequest data.
         * @member {Uint8Array} data
         * @memberof UploadRequest
         * @instance
         */
        UploadRequest.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new UploadRequest instance using the specified properties.
         * @function create
         * @memberof UploadRequest
         * @static
         * @param {IUploadRequest=} [properties] Properties to set
         * @returns {UploadRequest} UploadRequest instance
         */
        UploadRequest.create = function create(properties) {
            return new UploadRequest(properties);
        };
    
        /**
         * Encodes the specified UploadRequest message. Does not implicitly {@link UploadRequest.verify|verify} messages.
         * @function encode
         * @memberof UploadRequest
         * @static
         * @param {IUploadRequest} message UploadRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.filename);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified UploadRequest message, length delimited. Does not implicitly {@link UploadRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UploadRequest
         * @static
         * @param {IUploadRequest} message UploadRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an UploadRequest message from the specified reader or buffer.
         * @function decode
         * @memberof UploadRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UploadRequest} UploadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UploadRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.filename = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an UploadRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UploadRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UploadRequest} UploadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an UploadRequest message.
         * @function verify
         * @memberof UploadRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates an UploadRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UploadRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UploadRequest} UploadRequest
         */
        UploadRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.UploadRequest)
                return object;
            var message = new $root.UploadRequest();
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from an UploadRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UploadRequest
         * @static
         * @param {UploadRequest} message UploadRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.filename = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this UploadRequest to JSON.
         * @function toJSON
         * @memberof UploadRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return UploadRequest;
    })();
    
    $root.UploadResponse = (function() {
    
        /**
         * Properties of an UploadResponse.
         * @exports IUploadResponse
         * @interface IUploadResponse
         * @property {Status|null} [status] UploadResponse status
         * @property {string|null} [errorMessage] UploadResponse errorMessage
         * @property {IFileInfo|null} [fileInfo] UploadResponse fileInfo
         */
    
        /**
         * Constructs a new UploadResponse.
         * @exports UploadResponse
         * @classdesc Represents an UploadResponse.
         * @implements IUploadResponse
         * @constructor
         * @param {IUploadResponse=} [properties] Properties to set
         */
        function UploadResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * UploadResponse status.
         * @member {Status} status
         * @memberof UploadResponse
         * @instance
         */
        UploadResponse.prototype.status = 0;
    
        /**
         * UploadResponse errorMessage.
         * @member {string} errorMessage
         * @memberof UploadResponse
         * @instance
         */
        UploadResponse.prototype.errorMessage = "";
    
        /**
         * UploadResponse fileInfo.
         * @member {IFileInfo|null|undefined} fileInfo
         * @memberof UploadResponse
         * @instance
         */
        UploadResponse.prototype.fileInfo = null;
    
        /**
         * Creates a new UploadResponse instance using the specified properties.
         * @function create
         * @memberof UploadResponse
         * @static
         * @param {IUploadResponse=} [properties] Properties to set
         * @returns {UploadResponse} UploadResponse instance
         */
        UploadResponse.create = function create(properties) {
            return new UploadResponse(properties);
        };
    
        /**
         * Encodes the specified UploadResponse message. Does not implicitly {@link UploadResponse.verify|verify} messages.
         * @function encode
         * @memberof UploadResponse
         * @static
         * @param {IUploadResponse} message UploadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.fileInfo != null && Object.hasOwnProperty.call(message, "fileInfo"))
                $root.FileInfo.encode(message.fileInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified UploadResponse message, length delimited. Does not implicitly {@link UploadResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UploadResponse
         * @static
         * @param {IUploadResponse} message UploadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an UploadResponse message from the specified reader or buffer.
         * @function decode
         * @memberof UploadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UploadResponse} UploadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UploadResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                case 3:
                    message.fileInfo = $root.FileInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an UploadResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UploadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UploadResponse} UploadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an UploadResponse message.
         * @function verify
         * @memberof UploadResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.fileInfo != null && message.hasOwnProperty("fileInfo")) {
                var error = $root.FileInfo.verify(message.fileInfo);
                if (error)
                    return "fileInfo." + error;
            }
            return null;
        };
    
        /**
         * Creates an UploadResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UploadResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UploadResponse} UploadResponse
         */
        UploadResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.UploadResponse)
                return object;
            var message = new $root.UploadResponse();
            switch (object.status) {
            case "SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "UNABLE_TO_COMPLETE":
            case 1:
                message.status = 1;
                break;
            case "MESSAGE_ERROR":
            case 2:
                message.status = 2;
                break;
            case "NETWORK_ERROR":
            case 3:
                message.status = 3;
                break;
            case "PROCESSING_ERROR":
            case 4:
                message.status = 4;
                break;
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.fileInfo != null) {
                if (typeof object.fileInfo !== "object")
                    throw TypeError(".UploadResponse.fileInfo: object expected");
                message.fileInfo = $root.FileInfo.fromObject(object.fileInfo);
            }
            return message;
        };
    
        /**
         * Creates a plain object from an UploadResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UploadResponse
         * @static
         * @param {UploadResponse} message UploadResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "SUCCESS" : 0;
                object.errorMessage = "";
                object.fileInfo = null;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.Status[message.status] : message.status;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.fileInfo != null && message.hasOwnProperty("fileInfo"))
                object.fileInfo = $root.FileInfo.toObject(message.fileInfo, options);
            return object;
        };
    
        /**
         * Converts this UploadResponse to JSON.
         * @function toJSON
         * @memberof UploadResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return UploadResponse;
    })();
    
    $root.ReplicateRequest = (function() {
    
        /**
         * Properties of a ReplicateRequest.
         * @exports IReplicateRequest
         * @interface IReplicateRequest
         * @property {IFileInfo|null} [fileInfo] ReplicateRequest fileInfo
         * @property {number|null} [subnetId] ReplicateRequest subnetId
         */
    
        /**
         * Constructs a new ReplicateRequest.
         * @exports ReplicateRequest
         * @classdesc Represents a ReplicateRequest.
         * @implements IReplicateRequest
         * @constructor
         * @param {IReplicateRequest=} [properties] Properties to set
         */
        function ReplicateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ReplicateRequest fileInfo.
         * @member {IFileInfo|null|undefined} fileInfo
         * @memberof ReplicateRequest
         * @instance
         */
        ReplicateRequest.prototype.fileInfo = null;
    
        /**
         * ReplicateRequest subnetId.
         * @member {number} subnetId
         * @memberof ReplicateRequest
         * @instance
         */
        ReplicateRequest.prototype.subnetId = 0;
    
        /**
         * Creates a new ReplicateRequest instance using the specified properties.
         * @function create
         * @memberof ReplicateRequest
         * @static
         * @param {IReplicateRequest=} [properties] Properties to set
         * @returns {ReplicateRequest} ReplicateRequest instance
         */
        ReplicateRequest.create = function create(properties) {
            return new ReplicateRequest(properties);
        };
    
        /**
         * Encodes the specified ReplicateRequest message. Does not implicitly {@link ReplicateRequest.verify|verify} messages.
         * @function encode
         * @memberof ReplicateRequest
         * @static
         * @param {IReplicateRequest} message ReplicateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplicateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fileInfo != null && Object.hasOwnProperty.call(message, "fileInfo"))
                $root.FileInfo.encode(message.fileInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.subnetId != null && Object.hasOwnProperty.call(message, "subnetId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.subnetId);
            return writer;
        };
    
        /**
         * Encodes the specified ReplicateRequest message, length delimited. Does not implicitly {@link ReplicateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ReplicateRequest
         * @static
         * @param {IReplicateRequest} message ReplicateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplicateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ReplicateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ReplicateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ReplicateRequest} ReplicateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplicateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReplicateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fileInfo = $root.FileInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subnetId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ReplicateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ReplicateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ReplicateRequest} ReplicateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplicateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ReplicateRequest message.
         * @function verify
         * @memberof ReplicateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplicateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fileInfo != null && message.hasOwnProperty("fileInfo")) {
                var error = $root.FileInfo.verify(message.fileInfo);
                if (error)
                    return "fileInfo." + error;
            }
            if (message.subnetId != null && message.hasOwnProperty("subnetId"))
                if (!$util.isInteger(message.subnetId))
                    return "subnetId: integer expected";
            return null;
        };
    
        /**
         * Creates a ReplicateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ReplicateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ReplicateRequest} ReplicateRequest
         */
        ReplicateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ReplicateRequest)
                return object;
            var message = new $root.ReplicateRequest();
            if (object.fileInfo != null) {
                if (typeof object.fileInfo !== "object")
                    throw TypeError(".ReplicateRequest.fileInfo: object expected");
                message.fileInfo = $root.FileInfo.fromObject(object.fileInfo);
            }
            if (object.subnetId != null)
                message.subnetId = object.subnetId | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a ReplicateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ReplicateRequest
         * @static
         * @param {ReplicateRequest} message ReplicateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplicateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fileInfo = null;
                object.subnetId = 0;
            }
            if (message.fileInfo != null && message.hasOwnProperty("fileInfo"))
                object.fileInfo = $root.FileInfo.toObject(message.fileInfo, options);
            if (message.subnetId != null && message.hasOwnProperty("subnetId"))
                object.subnetId = message.subnetId;
            return object;
        };
    
        /**
         * Converts this ReplicateRequest to JSON.
         * @function toJSON
         * @memberof ReplicateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplicateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ReplicateRequest;
    })();
    
    $root.ReplicateResponse = (function() {
    
        /**
         * Properties of a ReplicateResponse.
         * @exports IReplicateResponse
         * @interface IReplicateResponse
         * @property {Status|null} [status] ReplicateResponse status
         * @property {string|null} [errorMessage] ReplicateResponse errorMessage
         * @property {Array.<INodeReplicationStatus>|null} [nodeStatusList] ReplicateResponse nodeStatusList
         */
    
        /**
         * Constructs a new ReplicateResponse.
         * @exports ReplicateResponse
         * @classdesc Represents a ReplicateResponse.
         * @implements IReplicateResponse
         * @constructor
         * @param {IReplicateResponse=} [properties] Properties to set
         */
        function ReplicateResponse(properties) {
            this.nodeStatusList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ReplicateResponse status.
         * @member {Status} status
         * @memberof ReplicateResponse
         * @instance
         */
        ReplicateResponse.prototype.status = 0;
    
        /**
         * ReplicateResponse errorMessage.
         * @member {string} errorMessage
         * @memberof ReplicateResponse
         * @instance
         */
        ReplicateResponse.prototype.errorMessage = "";
    
        /**
         * ReplicateResponse nodeStatusList.
         * @member {Array.<INodeReplicationStatus>} nodeStatusList
         * @memberof ReplicateResponse
         * @instance
         */
        ReplicateResponse.prototype.nodeStatusList = $util.emptyArray;
    
        /**
         * Creates a new ReplicateResponse instance using the specified properties.
         * @function create
         * @memberof ReplicateResponse
         * @static
         * @param {IReplicateResponse=} [properties] Properties to set
         * @returns {ReplicateResponse} ReplicateResponse instance
         */
        ReplicateResponse.create = function create(properties) {
            return new ReplicateResponse(properties);
        };
    
        /**
         * Encodes the specified ReplicateResponse message. Does not implicitly {@link ReplicateResponse.verify|verify} messages.
         * @function encode
         * @memberof ReplicateResponse
         * @static
         * @param {IReplicateResponse} message ReplicateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplicateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.nodeStatusList != null && message.nodeStatusList.length)
                for (var i = 0; i < message.nodeStatusList.length; ++i)
                    $root.NodeReplicationStatus.encode(message.nodeStatusList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified ReplicateResponse message, length delimited. Does not implicitly {@link ReplicateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ReplicateResponse
         * @static
         * @param {IReplicateResponse} message ReplicateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplicateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ReplicateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ReplicateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ReplicateResponse} ReplicateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplicateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReplicateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                case 3:
                    if (!(message.nodeStatusList && message.nodeStatusList.length))
                        message.nodeStatusList = [];
                    message.nodeStatusList.push($root.NodeReplicationStatus.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ReplicateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ReplicateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ReplicateResponse} ReplicateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplicateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ReplicateResponse message.
         * @function verify
         * @memberof ReplicateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplicateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.nodeStatusList != null && message.hasOwnProperty("nodeStatusList")) {
                if (!Array.isArray(message.nodeStatusList))
                    return "nodeStatusList: array expected";
                for (var i = 0; i < message.nodeStatusList.length; ++i) {
                    var error = $root.NodeReplicationStatus.verify(message.nodeStatusList[i]);
                    if (error)
                        return "nodeStatusList." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a ReplicateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ReplicateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ReplicateResponse} ReplicateResponse
         */
        ReplicateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ReplicateResponse)
                return object;
            var message = new $root.ReplicateResponse();
            switch (object.status) {
            case "SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "UNABLE_TO_COMPLETE":
            case 1:
                message.status = 1;
                break;
            case "MESSAGE_ERROR":
            case 2:
                message.status = 2;
                break;
            case "NETWORK_ERROR":
            case 3:
                message.status = 3;
                break;
            case "PROCESSING_ERROR":
            case 4:
                message.status = 4;
                break;
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.nodeStatusList) {
                if (!Array.isArray(object.nodeStatusList))
                    throw TypeError(".ReplicateResponse.nodeStatusList: array expected");
                message.nodeStatusList = [];
                for (var i = 0; i < object.nodeStatusList.length; ++i) {
                    if (typeof object.nodeStatusList[i] !== "object")
                        throw TypeError(".ReplicateResponse.nodeStatusList: object expected");
                    message.nodeStatusList[i] = $root.NodeReplicationStatus.fromObject(object.nodeStatusList[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a ReplicateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ReplicateResponse
         * @static
         * @param {ReplicateResponse} message ReplicateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplicateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.nodeStatusList = [];
            if (options.defaults) {
                object.status = options.enums === String ? "SUCCESS" : 0;
                object.errorMessage = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.Status[message.status] : message.status;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.nodeStatusList && message.nodeStatusList.length) {
                object.nodeStatusList = [];
                for (var j = 0; j < message.nodeStatusList.length; ++j)
                    object.nodeStatusList[j] = $root.NodeReplicationStatus.toObject(message.nodeStatusList[j], options);
            }
            return object;
        };
    
        /**
         * Converts this ReplicateResponse to JSON.
         * @function toJSON
         * @memberof ReplicateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplicateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ReplicateResponse;
    })();
    
    $root.ChunkRequest = (function() {
    
        /**
         * Properties of a ChunkRequest.
         * @exports IChunkRequest
         * @interface IChunkRequest
         * @property {Uint8Array|null} [fileHash] ChunkRequest fileHash
         * @property {number|null} [chunkIndex] ChunkRequest chunkIndex
         */
    
        /**
         * Constructs a new ChunkRequest.
         * @exports ChunkRequest
         * @classdesc Represents a ChunkRequest.
         * @implements IChunkRequest
         * @constructor
         * @param {IChunkRequest=} [properties] Properties to set
         */
        function ChunkRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ChunkRequest fileHash.
         * @member {Uint8Array} fileHash
         * @memberof ChunkRequest
         * @instance
         */
        ChunkRequest.prototype.fileHash = $util.newBuffer([]);
    
        /**
         * ChunkRequest chunkIndex.
         * @member {number} chunkIndex
         * @memberof ChunkRequest
         * @instance
         */
        ChunkRequest.prototype.chunkIndex = 0;
    
        /**
         * Creates a new ChunkRequest instance using the specified properties.
         * @function create
         * @memberof ChunkRequest
         * @static
         * @param {IChunkRequest=} [properties] Properties to set
         * @returns {ChunkRequest} ChunkRequest instance
         */
        ChunkRequest.create = function create(properties) {
            return new ChunkRequest(properties);
        };
    
        /**
         * Encodes the specified ChunkRequest message. Does not implicitly {@link ChunkRequest.verify|verify} messages.
         * @function encode
         * @memberof ChunkRequest
         * @static
         * @param {IChunkRequest} message ChunkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunkRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fileHash != null && Object.hasOwnProperty.call(message, "fileHash"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.fileHash);
            if (message.chunkIndex != null && Object.hasOwnProperty.call(message, "chunkIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.chunkIndex);
            return writer;
        };
    
        /**
         * Encodes the specified ChunkRequest message, length delimited. Does not implicitly {@link ChunkRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChunkRequest
         * @static
         * @param {IChunkRequest} message ChunkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunkRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ChunkRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ChunkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChunkRequest} ChunkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunkRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChunkRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fileHash = reader.bytes();
                    break;
                case 2:
                    message.chunkIndex = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ChunkRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChunkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChunkRequest} ChunkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunkRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ChunkRequest message.
         * @function verify
         * @memberof ChunkRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChunkRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fileHash != null && message.hasOwnProperty("fileHash"))
                if (!(message.fileHash && typeof message.fileHash.length === "number" || $util.isString(message.fileHash)))
                    return "fileHash: buffer expected";
            if (message.chunkIndex != null && message.hasOwnProperty("chunkIndex"))
                if (!$util.isInteger(message.chunkIndex))
                    return "chunkIndex: integer expected";
            return null;
        };
    
        /**
         * Creates a ChunkRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChunkRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChunkRequest} ChunkRequest
         */
        ChunkRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ChunkRequest)
                return object;
            var message = new $root.ChunkRequest();
            if (object.fileHash != null)
                if (typeof object.fileHash === "string")
                    $util.base64.decode(object.fileHash, message.fileHash = $util.newBuffer($util.base64.length(object.fileHash)), 0);
                else if (object.fileHash.length)
                    message.fileHash = object.fileHash;
            if (object.chunkIndex != null)
                message.chunkIndex = object.chunkIndex >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a ChunkRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChunkRequest
         * @static
         * @param {ChunkRequest} message ChunkRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChunkRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.fileHash = "";
                else {
                    object.fileHash = [];
                    if (options.bytes !== Array)
                        object.fileHash = $util.newBuffer(object.fileHash);
                }
                object.chunkIndex = 0;
            }
            if (message.fileHash != null && message.hasOwnProperty("fileHash"))
                object.fileHash = options.bytes === String ? $util.base64.encode(message.fileHash, 0, message.fileHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.fileHash) : message.fileHash;
            if (message.chunkIndex != null && message.hasOwnProperty("chunkIndex"))
                object.chunkIndex = message.chunkIndex;
            return object;
        };
    
        /**
         * Converts this ChunkRequest to JSON.
         * @function toJSON
         * @memberof ChunkRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChunkRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ChunkRequest;
    })();
    
    $root.ChunkResponse = (function() {
    
        /**
         * Properties of a ChunkResponse.
         * @exports IChunkResponse
         * @interface IChunkResponse
         * @property {Status|null} [status] ChunkResponse status
         * @property {string|null} [errorMessage] ChunkResponse errorMessage
         * @property {Uint8Array|null} [data] ChunkResponse data
         */
    
        /**
         * Constructs a new ChunkResponse.
         * @exports ChunkResponse
         * @classdesc Represents a ChunkResponse.
         * @implements IChunkResponse
         * @constructor
         * @param {IChunkResponse=} [properties] Properties to set
         */
        function ChunkResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ChunkResponse status.
         * @member {Status} status
         * @memberof ChunkResponse
         * @instance
         */
        ChunkResponse.prototype.status = 0;
    
        /**
         * ChunkResponse errorMessage.
         * @member {string} errorMessage
         * @memberof ChunkResponse
         * @instance
         */
        ChunkResponse.prototype.errorMessage = "";
    
        /**
         * ChunkResponse data.
         * @member {Uint8Array} data
         * @memberof ChunkResponse
         * @instance
         */
        ChunkResponse.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new ChunkResponse instance using the specified properties.
         * @function create
         * @memberof ChunkResponse
         * @static
         * @param {IChunkResponse=} [properties] Properties to set
         * @returns {ChunkResponse} ChunkResponse instance
         */
        ChunkResponse.create = function create(properties) {
            return new ChunkResponse(properties);
        };
    
        /**
         * Encodes the specified ChunkResponse message. Does not implicitly {@link ChunkResponse.verify|verify} messages.
         * @function encode
         * @memberof ChunkResponse
         * @static
         * @param {IChunkResponse} message ChunkResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunkResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified ChunkResponse message, length delimited. Does not implicitly {@link ChunkResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChunkResponse
         * @static
         * @param {IChunkResponse} message ChunkResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunkResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ChunkResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ChunkResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChunkResponse} ChunkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunkResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChunkResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ChunkResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChunkResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChunkResponse} ChunkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunkResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ChunkResponse message.
         * @function verify
         * @memberof ChunkResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChunkResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a ChunkResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChunkResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChunkResponse} ChunkResponse
         */
        ChunkResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ChunkResponse)
                return object;
            var message = new $root.ChunkResponse();
            switch (object.status) {
            case "SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "UNABLE_TO_COMPLETE":
            case 1:
                message.status = 1;
                break;
            case "MESSAGE_ERROR":
            case 2:
                message.status = 2;
                break;
            case "NETWORK_ERROR":
            case 3:
                message.status = 3;
                break;
            case "PROCESSING_ERROR":
            case 4:
                message.status = 4;
                break;
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a ChunkResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChunkResponse
         * @static
         * @param {ChunkResponse} message ChunkResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChunkResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "SUCCESS" : 0;
                object.errorMessage = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.Status[message.status] : message.status;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this ChunkResponse to JSON.
         * @function toJSON
         * @memberof ChunkResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChunkResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return ChunkResponse;
    })();
    
    $root.DownloadRequest = (function() {
    
        /**
         * Properties of a DownloadRequest.
         * @exports IDownloadRequest
         * @interface IDownloadRequest
         * @property {Uint8Array|null} [fileHash] DownloadRequest fileHash
         */
    
        /**
         * Constructs a new DownloadRequest.
         * @exports DownloadRequest
         * @classdesc Represents a DownloadRequest.
         * @implements IDownloadRequest
         * @constructor
         * @param {IDownloadRequest=} [properties] Properties to set
         */
        function DownloadRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * DownloadRequest fileHash.
         * @member {Uint8Array} fileHash
         * @memberof DownloadRequest
         * @instance
         */
        DownloadRequest.prototype.fileHash = $util.newBuffer([]);
    
        /**
         * Creates a new DownloadRequest instance using the specified properties.
         * @function create
         * @memberof DownloadRequest
         * @static
         * @param {IDownloadRequest=} [properties] Properties to set
         * @returns {DownloadRequest} DownloadRequest instance
         */
        DownloadRequest.create = function create(properties) {
            return new DownloadRequest(properties);
        };
    
        /**
         * Encodes the specified DownloadRequest message. Does not implicitly {@link DownloadRequest.verify|verify} messages.
         * @function encode
         * @memberof DownloadRequest
         * @static
         * @param {IDownloadRequest} message DownloadRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownloadRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fileHash != null && Object.hasOwnProperty.call(message, "fileHash"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.fileHash);
            return writer;
        };
    
        /**
         * Encodes the specified DownloadRequest message, length delimited. Does not implicitly {@link DownloadRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DownloadRequest
         * @static
         * @param {IDownloadRequest} message DownloadRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownloadRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a DownloadRequest message from the specified reader or buffer.
         * @function decode
         * @memberof DownloadRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DownloadRequest} DownloadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownloadRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DownloadRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fileHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a DownloadRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DownloadRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DownloadRequest} DownloadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownloadRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a DownloadRequest message.
         * @function verify
         * @memberof DownloadRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DownloadRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fileHash != null && message.hasOwnProperty("fileHash"))
                if (!(message.fileHash && typeof message.fileHash.length === "number" || $util.isString(message.fileHash)))
                    return "fileHash: buffer expected";
            return null;
        };
    
        /**
         * Creates a DownloadRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DownloadRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DownloadRequest} DownloadRequest
         */
        DownloadRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.DownloadRequest)
                return object;
            var message = new $root.DownloadRequest();
            if (object.fileHash != null)
                if (typeof object.fileHash === "string")
                    $util.base64.decode(object.fileHash, message.fileHash = $util.newBuffer($util.base64.length(object.fileHash)), 0);
                else if (object.fileHash.length)
                    message.fileHash = object.fileHash;
            return message;
        };
    
        /**
         * Creates a plain object from a DownloadRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DownloadRequest
         * @static
         * @param {DownloadRequest} message DownloadRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DownloadRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.fileHash = "";
                else {
                    object.fileHash = [];
                    if (options.bytes !== Array)
                        object.fileHash = $util.newBuffer(object.fileHash);
                }
            if (message.fileHash != null && message.hasOwnProperty("fileHash"))
                object.fileHash = options.bytes === String ? $util.base64.encode(message.fileHash, 0, message.fileHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.fileHash) : message.fileHash;
            return object;
        };
    
        /**
         * Converts this DownloadRequest to JSON.
         * @function toJSON
         * @memberof DownloadRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DownloadRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return DownloadRequest;
    })();
    
    $root.DownloadResponse = (function() {
    
        /**
         * Properties of a DownloadResponse.
         * @exports IDownloadResponse
         * @interface IDownloadResponse
         * @property {Status|null} [status] DownloadResponse status
         * @property {string|null} [errorMessage] DownloadResponse errorMessage
         * @property {Uint8Array|null} [data] DownloadResponse data
         */
    
        /**
         * Constructs a new DownloadResponse.
         * @exports DownloadResponse
         * @classdesc Represents a DownloadResponse.
         * @implements IDownloadResponse
         * @constructor
         * @param {IDownloadResponse=} [properties] Properties to set
         */
        function DownloadResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * DownloadResponse status.
         * @member {Status} status
         * @memberof DownloadResponse
         * @instance
         */
        DownloadResponse.prototype.status = 0;
    
        /**
         * DownloadResponse errorMessage.
         * @member {string} errorMessage
         * @memberof DownloadResponse
         * @instance
         */
        DownloadResponse.prototype.errorMessage = "";
    
        /**
         * DownloadResponse data.
         * @member {Uint8Array} data
         * @memberof DownloadResponse
         * @instance
         */
        DownloadResponse.prototype.data = $util.newBuffer([]);
    
        /**
         * Creates a new DownloadResponse instance using the specified properties.
         * @function create
         * @memberof DownloadResponse
         * @static
         * @param {IDownloadResponse=} [properties] Properties to set
         * @returns {DownloadResponse} DownloadResponse instance
         */
        DownloadResponse.create = function create(properties) {
            return new DownloadResponse(properties);
        };
    
        /**
         * Encodes the specified DownloadResponse message. Does not implicitly {@link DownloadResponse.verify|verify} messages.
         * @function encode
         * @memberof DownloadResponse
         * @static
         * @param {IDownloadResponse} message DownloadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownloadResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };
    
        /**
         * Encodes the specified DownloadResponse message, length delimited. Does not implicitly {@link DownloadResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DownloadResponse
         * @static
         * @param {IDownloadResponse} message DownloadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownloadResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a DownloadResponse message from the specified reader or buffer.
         * @function decode
         * @memberof DownloadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DownloadResponse} DownloadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownloadResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DownloadResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a DownloadResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DownloadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DownloadResponse} DownloadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownloadResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a DownloadResponse message.
         * @function verify
         * @memberof DownloadResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DownloadResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };
    
        /**
         * Creates a DownloadResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DownloadResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DownloadResponse} DownloadResponse
         */
        DownloadResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.DownloadResponse)
                return object;
            var message = new $root.DownloadResponse();
            switch (object.status) {
            case "SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "UNABLE_TO_COMPLETE":
            case 1:
                message.status = 1;
                break;
            case "MESSAGE_ERROR":
            case 2:
                message.status = 2;
                break;
            case "NETWORK_ERROR":
            case 3:
                message.status = 3;
                break;
            case "PROCESSING_ERROR":
            case 4:
                message.status = 4;
                break;
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };
    
        /**
         * Creates a plain object from a DownloadResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DownloadResponse
         * @static
         * @param {DownloadResponse} message DownloadResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DownloadResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "SUCCESS" : 0;
                object.errorMessage = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.Status[message.status] : message.status;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };
    
        /**
         * Converts this DownloadResponse to JSON.
         * @function toJSON
         * @memberof DownloadResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DownloadResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return DownloadResponse;
    })();
    
    $root.Message = (function() {
    
        /**
         * Properties of a Message.
         * @exports IMessage
         * @interface IMessage
         * @property {Message.Type|null} [type] Message type
         * @property {ILocalSearchRequest|null} [localSearchRequest] Message localSearchRequest
         * @property {ILocalSearchResponse|null} [localSearchResponse] Message localSearchResponse
         * @property {ISearchRequest|null} [searchRequest] Message searchRequest
         * @property {ISearchResponse|null} [searchResponse] Message searchResponse
         * @property {IUploadRequest|null} [uploadRequest] Message uploadRequest
         * @property {IUploadResponse|null} [uploadResponse] Message uploadResponse
         * @property {IReplicateRequest|null} [replicateRequest] Message replicateRequest
         * @property {IReplicateResponse|null} [replicateResponse] Message replicateResponse
         * @property {IChunkRequest|null} [chunkRequest] Message chunkRequest
         * @property {IChunkResponse|null} [chunkResponse] Message chunkResponse
         * @property {IDownloadRequest|null} [downloadRequest] Message downloadRequest
         * @property {IDownloadResponse|null} [downloadResponse] Message downloadResponse
         * @property {IRegistrationRequest|null} [registrationRequest] Message registrationRequest
         * @property {IRegistrationResponse|null} [registrationResponse] Message registrationResponse
         * @property {ISubnetRequest|null} [subnetRequest] Message subnetRequest
         * @property {ISubnetResponse|null} [subnetResponse] Message subnetResponse
         */
    
        /**
         * Constructs a new Message.
         * @exports Message
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Message type.
         * @member {Message.Type} type
         * @memberof Message
         * @instance
         */
        Message.prototype.type = 0;
    
        /**
         * Message localSearchRequest.
         * @member {ILocalSearchRequest|null|undefined} localSearchRequest
         * @memberof Message
         * @instance
         */
        Message.prototype.localSearchRequest = null;
    
        /**
         * Message localSearchResponse.
         * @member {ILocalSearchResponse|null|undefined} localSearchResponse
         * @memberof Message
         * @instance
         */
        Message.prototype.localSearchResponse = null;
    
        /**
         * Message searchRequest.
         * @member {ISearchRequest|null|undefined} searchRequest
         * @memberof Message
         * @instance
         */
        Message.prototype.searchRequest = null;
    
        /**
         * Message searchResponse.
         * @member {ISearchResponse|null|undefined} searchResponse
         * @memberof Message
         * @instance
         */
        Message.prototype.searchResponse = null;
    
        /**
         * Message uploadRequest.
         * @member {IUploadRequest|null|undefined} uploadRequest
         * @memberof Message
         * @instance
         */
        Message.prototype.uploadRequest = null;
    
        /**
         * Message uploadResponse.
         * @member {IUploadResponse|null|undefined} uploadResponse
         * @memberof Message
         * @instance
         */
        Message.prototype.uploadResponse = null;
    
        /**
         * Message replicateRequest.
         * @member {IReplicateRequest|null|undefined} replicateRequest
         * @memberof Message
         * @instance
         */
        Message.prototype.replicateRequest = null;
    
        /**
         * Message replicateResponse.
         * @member {IReplicateResponse|null|undefined} replicateResponse
         * @memberof Message
         * @instance
         */
        Message.prototype.replicateResponse = null;
    
        /**
         * Message chunkRequest.
         * @member {IChunkRequest|null|undefined} chunkRequest
         * @memberof Message
         * @instance
         */
        Message.prototype.chunkRequest = null;
    
        /**
         * Message chunkResponse.
         * @member {IChunkResponse|null|undefined} chunkResponse
         * @memberof Message
         * @instance
         */
        Message.prototype.chunkResponse = null;
    
        /**
         * Message downloadRequest.
         * @member {IDownloadRequest|null|undefined} downloadRequest
         * @memberof Message
         * @instance
         */
        Message.prototype.downloadRequest = null;
    
        /**
         * Message downloadResponse.
         * @member {IDownloadResponse|null|undefined} downloadResponse
         * @memberof Message
         * @instance
         */
        Message.prototype.downloadResponse = null;
    
        /**
         * Message registrationRequest.
         * @member {IRegistrationRequest|null|undefined} registrationRequest
         * @memberof Message
         * @instance
         */
        Message.prototype.registrationRequest = null;
    
        /**
         * Message registrationResponse.
         * @member {IRegistrationResponse|null|undefined} registrationResponse
         * @memberof Message
         * @instance
         */
        Message.prototype.registrationResponse = null;
    
        /**
         * Message subnetRequest.
         * @member {ISubnetRequest|null|undefined} subnetRequest
         * @memberof Message
         * @instance
         */
        Message.prototype.subnetRequest = null;
    
        /**
         * Message subnetResponse.
         * @member {ISubnetResponse|null|undefined} subnetResponse
         * @memberof Message
         * @instance
         */
        Message.prototype.subnetResponse = null;
    
        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof Message
         * @static
         * @param {IMessage=} [properties] Properties to set
         * @returns {Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };
    
        /**
         * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
         * @function encode
         * @memberof Message
         * @static
         * @param {IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.localSearchRequest != null && Object.hasOwnProperty.call(message, "localSearchRequest"))
                $root.LocalSearchRequest.encode(message.localSearchRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.localSearchResponse != null && Object.hasOwnProperty.call(message, "localSearchResponse"))
                $root.LocalSearchResponse.encode(message.localSearchResponse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.searchRequest != null && Object.hasOwnProperty.call(message, "searchRequest"))
                $root.SearchRequest.encode(message.searchRequest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.searchResponse != null && Object.hasOwnProperty.call(message, "searchResponse"))
                $root.SearchResponse.encode(message.searchResponse, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.uploadRequest != null && Object.hasOwnProperty.call(message, "uploadRequest"))
                $root.UploadRequest.encode(message.uploadRequest, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.uploadResponse != null && Object.hasOwnProperty.call(message, "uploadResponse"))
                $root.UploadResponse.encode(message.uploadResponse, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.replicateRequest != null && Object.hasOwnProperty.call(message, "replicateRequest"))
                $root.ReplicateRequest.encode(message.replicateRequest, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.replicateResponse != null && Object.hasOwnProperty.call(message, "replicateResponse"))
                $root.ReplicateResponse.encode(message.replicateResponse, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.chunkRequest != null && Object.hasOwnProperty.call(message, "chunkRequest"))
                $root.ChunkRequest.encode(message.chunkRequest, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.chunkResponse != null && Object.hasOwnProperty.call(message, "chunkResponse"))
                $root.ChunkResponse.encode(message.chunkResponse, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.downloadRequest != null && Object.hasOwnProperty.call(message, "downloadRequest"))
                $root.DownloadRequest.encode(message.downloadRequest, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.downloadResponse != null && Object.hasOwnProperty.call(message, "downloadResponse"))
                $root.DownloadResponse.encode(message.downloadResponse, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.registrationRequest != null && Object.hasOwnProperty.call(message, "registrationRequest"))
                $root.RegistrationRequest.encode(message.registrationRequest, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.registrationResponse != null && Object.hasOwnProperty.call(message, "registrationResponse"))
                $root.RegistrationResponse.encode(message.registrationResponse, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.subnetRequest != null && Object.hasOwnProperty.call(message, "subnetRequest"))
                $root.SubnetRequest.encode(message.subnetRequest, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.subnetResponse != null && Object.hasOwnProperty.call(message, "subnetResponse"))
                $root.SubnetResponse.encode(message.subnetResponse, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Message
         * @static
         * @param {IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.localSearchRequest = $root.LocalSearchRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.localSearchResponse = $root.LocalSearchResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.searchRequest = $root.SearchRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.searchResponse = $root.SearchResponse.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.uploadRequest = $root.UploadRequest.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.uploadResponse = $root.UploadResponse.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.replicateRequest = $root.ReplicateRequest.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.replicateResponse = $root.ReplicateResponse.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.chunkRequest = $root.ChunkRequest.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.chunkResponse = $root.ChunkResponse.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.downloadRequest = $root.DownloadRequest.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.downloadResponse = $root.DownloadResponse.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.registrationRequest = $root.RegistrationRequest.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.registrationResponse = $root.RegistrationResponse.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.subnetRequest = $root.SubnetRequest.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.subnetResponse = $root.SubnetResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Message message.
         * @function verify
         * @memberof Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                    break;
                }
            if (message.localSearchRequest != null && message.hasOwnProperty("localSearchRequest")) {
                var error = $root.LocalSearchRequest.verify(message.localSearchRequest);
                if (error)
                    return "localSearchRequest." + error;
            }
            if (message.localSearchResponse != null && message.hasOwnProperty("localSearchResponse")) {
                var error = $root.LocalSearchResponse.verify(message.localSearchResponse);
                if (error)
                    return "localSearchResponse." + error;
            }
            if (message.searchRequest != null && message.hasOwnProperty("searchRequest")) {
                var error = $root.SearchRequest.verify(message.searchRequest);
                if (error)
                    return "searchRequest." + error;
            }
            if (message.searchResponse != null && message.hasOwnProperty("searchResponse")) {
                var error = $root.SearchResponse.verify(message.searchResponse);
                if (error)
                    return "searchResponse." + error;
            }
            if (message.uploadRequest != null && message.hasOwnProperty("uploadRequest")) {
                var error = $root.UploadRequest.verify(message.uploadRequest);
                if (error)
                    return "uploadRequest." + error;
            }
            if (message.uploadResponse != null && message.hasOwnProperty("uploadResponse")) {
                var error = $root.UploadResponse.verify(message.uploadResponse);
                if (error)
                    return "uploadResponse." + error;
            }
            if (message.replicateRequest != null && message.hasOwnProperty("replicateRequest")) {
                var error = $root.ReplicateRequest.verify(message.replicateRequest);
                if (error)
                    return "replicateRequest." + error;
            }
            if (message.replicateResponse != null && message.hasOwnProperty("replicateResponse")) {
                var error = $root.ReplicateResponse.verify(message.replicateResponse);
                if (error)
                    return "replicateResponse." + error;
            }
            if (message.chunkRequest != null && message.hasOwnProperty("chunkRequest")) {
                var error = $root.ChunkRequest.verify(message.chunkRequest);
                if (error)
                    return "chunkRequest." + error;
            }
            if (message.chunkResponse != null && message.hasOwnProperty("chunkResponse")) {
                var error = $root.ChunkResponse.verify(message.chunkResponse);
                if (error)
                    return "chunkResponse." + error;
            }
            if (message.downloadRequest != null && message.hasOwnProperty("downloadRequest")) {
                var error = $root.DownloadRequest.verify(message.downloadRequest);
                if (error)
                    return "downloadRequest." + error;
            }
            if (message.downloadResponse != null && message.hasOwnProperty("downloadResponse")) {
                var error = $root.DownloadResponse.verify(message.downloadResponse);
                if (error)
                    return "downloadResponse." + error;
            }
            if (message.registrationRequest != null && message.hasOwnProperty("registrationRequest")) {
                var error = $root.RegistrationRequest.verify(message.registrationRequest);
                if (error)
                    return "registrationRequest." + error;
            }
            if (message.registrationResponse != null && message.hasOwnProperty("registrationResponse")) {
                var error = $root.RegistrationResponse.verify(message.registrationResponse);
                if (error)
                    return "registrationResponse." + error;
            }
            if (message.subnetRequest != null && message.hasOwnProperty("subnetRequest")) {
                var error = $root.SubnetRequest.verify(message.subnetRequest);
                if (error)
                    return "subnetRequest." + error;
            }
            if (message.subnetResponse != null && message.hasOwnProperty("subnetResponse")) {
                var error = $root.SubnetResponse.verify(message.subnetResponse);
                if (error)
                    return "subnetResponse." + error;
            }
            return null;
        };
    
        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.Message)
                return object;
            var message = new $root.Message();
            switch (object.type) {
            case "LOCAL_SEARCH_REQUEST":
            case 0:
                message.type = 0;
                break;
            case "LOCAL_SEARCH_RESPONSE":
            case 1:
                message.type = 1;
                break;
            case "SEARCH_REQUEST":
            case 2:
                message.type = 2;
                break;
            case "SEARCH_RESPONSE":
            case 3:
                message.type = 3;
                break;
            case "UPLOAD_REQUEST":
            case 4:
                message.type = 4;
                break;
            case "UPLOAD_RESPONSE":
            case 5:
                message.type = 5;
                break;
            case "REPLICATE_REQUEST":
            case 6:
                message.type = 6;
                break;
            case "REPLICATE_RESPONSE":
            case 7:
                message.type = 7;
                break;
            case "CHUNK_REQUEST":
            case 8:
                message.type = 8;
                break;
            case "CHUNK_RESPONSE":
            case 9:
                message.type = 9;
                break;
            case "DOWNLOAD_REQUEST":
            case 10:
                message.type = 10;
                break;
            case "DOWNLOAD_RESPONSE":
            case 11:
                message.type = 11;
                break;
            case "REGISTRATION_REQUEST":
            case 12:
                message.type = 12;
                break;
            case "REGISTRATION_RESPONSE":
            case 13:
                message.type = 13;
                break;
            case "SUBNET_REQUEST":
            case 14:
                message.type = 14;
                break;
            case "SUBNET_RESPONSE":
            case 15:
                message.type = 15;
                break;
            }
            if (object.localSearchRequest != null) {
                if (typeof object.localSearchRequest !== "object")
                    throw TypeError(".Message.localSearchRequest: object expected");
                message.localSearchRequest = $root.LocalSearchRequest.fromObject(object.localSearchRequest);
            }
            if (object.localSearchResponse != null) {
                if (typeof object.localSearchResponse !== "object")
                    throw TypeError(".Message.localSearchResponse: object expected");
                message.localSearchResponse = $root.LocalSearchResponse.fromObject(object.localSearchResponse);
            }
            if (object.searchRequest != null) {
                if (typeof object.searchRequest !== "object")
                    throw TypeError(".Message.searchRequest: object expected");
                message.searchRequest = $root.SearchRequest.fromObject(object.searchRequest);
            }
            if (object.searchResponse != null) {
                if (typeof object.searchResponse !== "object")
                    throw TypeError(".Message.searchResponse: object expected");
                message.searchResponse = $root.SearchResponse.fromObject(object.searchResponse);
            }
            if (object.uploadRequest != null) {
                if (typeof object.uploadRequest !== "object")
                    throw TypeError(".Message.uploadRequest: object expected");
                message.uploadRequest = $root.UploadRequest.fromObject(object.uploadRequest);
            }
            if (object.uploadResponse != null) {
                if (typeof object.uploadResponse !== "object")
                    throw TypeError(".Message.uploadResponse: object expected");
                message.uploadResponse = $root.UploadResponse.fromObject(object.uploadResponse);
            }
            if (object.replicateRequest != null) {
                if (typeof object.replicateRequest !== "object")
                    throw TypeError(".Message.replicateRequest: object expected");
                message.replicateRequest = $root.ReplicateRequest.fromObject(object.replicateRequest);
            }
            if (object.replicateResponse != null) {
                if (typeof object.replicateResponse !== "object")
                    throw TypeError(".Message.replicateResponse: object expected");
                message.replicateResponse = $root.ReplicateResponse.fromObject(object.replicateResponse);
            }
            if (object.chunkRequest != null) {
                if (typeof object.chunkRequest !== "object")
                    throw TypeError(".Message.chunkRequest: object expected");
                message.chunkRequest = $root.ChunkRequest.fromObject(object.chunkRequest);
            }
            if (object.chunkResponse != null) {
                if (typeof object.chunkResponse !== "object")
                    throw TypeError(".Message.chunkResponse: object expected");
                message.chunkResponse = $root.ChunkResponse.fromObject(object.chunkResponse);
            }
            if (object.downloadRequest != null) {
                if (typeof object.downloadRequest !== "object")
                    throw TypeError(".Message.downloadRequest: object expected");
                message.downloadRequest = $root.DownloadRequest.fromObject(object.downloadRequest);
            }
            if (object.downloadResponse != null) {
                if (typeof object.downloadResponse !== "object")
                    throw TypeError(".Message.downloadResponse: object expected");
                message.downloadResponse = $root.DownloadResponse.fromObject(object.downloadResponse);
            }
            if (object.registrationRequest != null) {
                if (typeof object.registrationRequest !== "object")
                    throw TypeError(".Message.registrationRequest: object expected");
                message.registrationRequest = $root.RegistrationRequest.fromObject(object.registrationRequest);
            }
            if (object.registrationResponse != null) {
                if (typeof object.registrationResponse !== "object")
                    throw TypeError(".Message.registrationResponse: object expected");
                message.registrationResponse = $root.RegistrationResponse.fromObject(object.registrationResponse);
            }
            if (object.subnetRequest != null) {
                if (typeof object.subnetRequest !== "object")
                    throw TypeError(".Message.subnetRequest: object expected");
                message.subnetRequest = $root.SubnetRequest.fromObject(object.subnetRequest);
            }
            if (object.subnetResponse != null) {
                if (typeof object.subnetResponse !== "object")
                    throw TypeError(".Message.subnetResponse: object expected");
                message.subnetResponse = $root.SubnetResponse.fromObject(object.subnetResponse);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Message
         * @static
         * @param {Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "LOCAL_SEARCH_REQUEST" : 0;
                object.localSearchRequest = null;
                object.localSearchResponse = null;
                object.searchRequest = null;
                object.searchResponse = null;
                object.uploadRequest = null;
                object.uploadResponse = null;
                object.replicateRequest = null;
                object.replicateResponse = null;
                object.chunkRequest = null;
                object.chunkResponse = null;
                object.downloadRequest = null;
                object.downloadResponse = null;
                object.registrationRequest = null;
                object.registrationResponse = null;
                object.subnetRequest = null;
                object.subnetResponse = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Message.Type[message.type] : message.type;
            if (message.localSearchRequest != null && message.hasOwnProperty("localSearchRequest"))
                object.localSearchRequest = $root.LocalSearchRequest.toObject(message.localSearchRequest, options);
            if (message.localSearchResponse != null && message.hasOwnProperty("localSearchResponse"))
                object.localSearchResponse = $root.LocalSearchResponse.toObject(message.localSearchResponse, options);
            if (message.searchRequest != null && message.hasOwnProperty("searchRequest"))
                object.searchRequest = $root.SearchRequest.toObject(message.searchRequest, options);
            if (message.searchResponse != null && message.hasOwnProperty("searchResponse"))
                object.searchResponse = $root.SearchResponse.toObject(message.searchResponse, options);
            if (message.uploadRequest != null && message.hasOwnProperty("uploadRequest"))
                object.uploadRequest = $root.UploadRequest.toObject(message.uploadRequest, options);
            if (message.uploadResponse != null && message.hasOwnProperty("uploadResponse"))
                object.uploadResponse = $root.UploadResponse.toObject(message.uploadResponse, options);
            if (message.replicateRequest != null && message.hasOwnProperty("replicateRequest"))
                object.replicateRequest = $root.ReplicateRequest.toObject(message.replicateRequest, options);
            if (message.replicateResponse != null && message.hasOwnProperty("replicateResponse"))
                object.replicateResponse = $root.ReplicateResponse.toObject(message.replicateResponse, options);
            if (message.chunkRequest != null && message.hasOwnProperty("chunkRequest"))
                object.chunkRequest = $root.ChunkRequest.toObject(message.chunkRequest, options);
            if (message.chunkResponse != null && message.hasOwnProperty("chunkResponse"))
                object.chunkResponse = $root.ChunkResponse.toObject(message.chunkResponse, options);
            if (message.downloadRequest != null && message.hasOwnProperty("downloadRequest"))
                object.downloadRequest = $root.DownloadRequest.toObject(message.downloadRequest, options);
            if (message.downloadResponse != null && message.hasOwnProperty("downloadResponse"))
                object.downloadResponse = $root.DownloadResponse.toObject(message.downloadResponse, options);
            if (message.registrationRequest != null && message.hasOwnProperty("registrationRequest"))
                object.registrationRequest = $root.RegistrationRequest.toObject(message.registrationRequest, options);
            if (message.registrationResponse != null && message.hasOwnProperty("registrationResponse"))
                object.registrationResponse = $root.RegistrationResponse.toObject(message.registrationResponse, options);
            if (message.subnetRequest != null && message.hasOwnProperty("subnetRequest"))
                object.subnetRequest = $root.SubnetRequest.toObject(message.subnetRequest, options);
            if (message.subnetResponse != null && message.hasOwnProperty("subnetResponse"))
                object.subnetResponse = $root.SubnetResponse.toObject(message.subnetResponse, options);
            return object;
        };
    
        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Type enum.
         * @name Message.Type
         * @enum {number}
         * @property {number} LOCAL_SEARCH_REQUEST=0 LOCAL_SEARCH_REQUEST value
         * @property {number} LOCAL_SEARCH_RESPONSE=1 LOCAL_SEARCH_RESPONSE value
         * @property {number} SEARCH_REQUEST=2 SEARCH_REQUEST value
         * @property {number} SEARCH_RESPONSE=3 SEARCH_RESPONSE value
         * @property {number} UPLOAD_REQUEST=4 UPLOAD_REQUEST value
         * @property {number} UPLOAD_RESPONSE=5 UPLOAD_RESPONSE value
         * @property {number} REPLICATE_REQUEST=6 REPLICATE_REQUEST value
         * @property {number} REPLICATE_RESPONSE=7 REPLICATE_RESPONSE value
         * @property {number} CHUNK_REQUEST=8 CHUNK_REQUEST value
         * @property {number} CHUNK_RESPONSE=9 CHUNK_RESPONSE value
         * @property {number} DOWNLOAD_REQUEST=10 DOWNLOAD_REQUEST value
         * @property {number} DOWNLOAD_RESPONSE=11 DOWNLOAD_RESPONSE value
         * @property {number} REGISTRATION_REQUEST=12 REGISTRATION_REQUEST value
         * @property {number} REGISTRATION_RESPONSE=13 REGISTRATION_RESPONSE value
         * @property {number} SUBNET_REQUEST=14 SUBNET_REQUEST value
         * @property {number} SUBNET_RESPONSE=15 SUBNET_RESPONSE value
         */
        Message.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LOCAL_SEARCH_REQUEST"] = 0;
            values[valuesById[1] = "LOCAL_SEARCH_RESPONSE"] = 1;
            values[valuesById[2] = "SEARCH_REQUEST"] = 2;
            values[valuesById[3] = "SEARCH_RESPONSE"] = 3;
            values[valuesById[4] = "UPLOAD_REQUEST"] = 4;
            values[valuesById[5] = "UPLOAD_RESPONSE"] = 5;
            values[valuesById[6] = "REPLICATE_REQUEST"] = 6;
            values[valuesById[7] = "REPLICATE_RESPONSE"] = 7;
            values[valuesById[8] = "CHUNK_REQUEST"] = 8;
            values[valuesById[9] = "CHUNK_RESPONSE"] = 9;
            values[valuesById[10] = "DOWNLOAD_REQUEST"] = 10;
            values[valuesById[11] = "DOWNLOAD_RESPONSE"] = 11;
            values[valuesById[12] = "REGISTRATION_REQUEST"] = 12;
            values[valuesById[13] = "REGISTRATION_RESPONSE"] = 13;
            values[valuesById[14] = "SUBNET_REQUEST"] = 14;
            values[valuesById[15] = "SUBNET_RESPONSE"] = 15;
            return values;
        })();
    
        return Message;
    })();
    
    /**
     * Status enum.
     * @exports Status
     * @enum {number}
     * @property {number} SUCCESS=0 SUCCESS value
     * @property {number} UNABLE_TO_COMPLETE=1 UNABLE_TO_COMPLETE value
     * @property {number} MESSAGE_ERROR=2 MESSAGE_ERROR value
     * @property {number} NETWORK_ERROR=3 NETWORK_ERROR value
     * @property {number} PROCESSING_ERROR=4 PROCESSING_ERROR value
     */
    $root.Status = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCCESS"] = 0;
        values[valuesById[1] = "UNABLE_TO_COMPLETE"] = 1;
        values[valuesById[2] = "MESSAGE_ERROR"] = 2;
        values[valuesById[3] = "NETWORK_ERROR"] = 3;
        values[valuesById[4] = "PROCESSING_ERROR"] = 4;
        return values;
    })();

    return $root;
});
