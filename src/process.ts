import { Application } from './application';
import { Utils } from './utils/general-utils';

const [ hubIP, hubPort, port, processIdx ] = Utils.args();

Utils.setLogPrefix(processIdx, port);

new Application(hubIP, hubPort, port, processIdx)
    .run();
