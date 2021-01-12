import net from 'net';
import { ChildProcess, fork } from 'child_process';
import path from 'path';

const hubIP = process.argv[2];
const hubPort = process.argv[3];
const childPorts = process.argv.slice(4);

const childProcesses: { child: ChildProcess, port: string }[] = [];
const childModulePath = path.join(__dirname, 'process.js');

childPorts.forEach(port => {
    const processIdx = (childProcesses.length + 1).toString();
    const child = fork(childModulePath, [ hubIP, hubPort, port, processIdx ]);
    childProcesses.push({ child, port });
});

