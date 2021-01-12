import { Socket } from 'net';
import { Constants } from './constants';
import { yellow } from 'cli-color';
import { DataType } from '../models/app-model';
import md5 from 'md5';

export class Utils {

    static args(): [ string, number, number, number ] {
        const hubIP = process.argv[2];
        if (!hubIP) throw new Error(`Invalid hub IP ("${ hubIP }")`);

        let hubPort: undefined | string | number = process.argv[3];
        if (!hubPort) throw new Error('Invalid hub port')
        hubPort = parseInt(hubPort);
        if (isNaN(hubPort)) throw new Error('Invalid hub port');

        let port: undefined | string | number = process.argv[4];
        if (!port) throw new Error('Invalid port')
        port = parseInt(port);
        if (isNaN(port)) throw new Error('Invalid port');

        let processIdx: undefined | string | number = process.argv[5];
        if (!processIdx) throw new Error('Invalid process index')
        processIdx = parseInt(processIdx);
        if (isNaN(processIdx)) throw new Error('Invalid process index');

        return [ hubIP, hubPort, port, processIdx ];
    }

    static extractSocketData(socket: Socket): { ip: string, port: number } {
        return {
            ip: socket.remoteFamily === 'IPv6' ? socket.remoteAddress!.split(':')[3] : socket.remoteAddress!,
            port: socket.remotePort!,
        }
    }

    static setLogPrefix(processIdx: number, port: number) {
        const log = console.log;
        console.log = function () {
            const args = Array.from(arguments);
            args.unshift(`[ ${ Constants.OWNER }-${ processIdx } ] `);
            log.apply(console, args);
        };

        if (Constants.LOG_INFO) {
            console.info = function () {
                const args = Array.from(arguments);
                args.unshift(yellow(`[ ${ Constants.OWNER }-${ processIdx } ]`));
                log.apply(console, args);
            };
        } else {
            console.info = function () { };
        }
    }

    static hash(data: DataType): Uint8Array {
        if (!data || data.length === 0) data = new Uint8Array();

        const hash = md5(data as any, { encoding: 'ASCII' });
        return Uint8Array.from(Buffer.from(hash, 'hex'));
    }

    static hashMatch(hash1: DataType | Buffer, hash2: DataType | Buffer): boolean {
        if (!hash1 || !hash2 || hash1.byteLength !== hash2.byteLength) return false;

        for (let i = 0; i < hash1.byteLength; i++) {
            if (hash1[i] !== hash2[i]) return false;
        }

        return true;
    }
}
