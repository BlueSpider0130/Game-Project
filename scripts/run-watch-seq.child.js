const { execSync, fork, spawn } = require('child_process');
const { onExit, chunksToLinesAsync, chomp } = require('@rauschma/stringio');
const minimist = require('minimist');


const args = minimist(process.argv.slice(2));
const [task] = args._;

const exec = (command) => {
    return spawn(command, [], { shell: true, stdio: ['ignore', 'pipe', process.stderr] });
};

async function echoReadable(childProcess) {
    let isReached = false;
    for await (const line of chunksToLinesAsync(childProcess.stdout)) {
        console.log(chomp(line));
        if (!isReached && line.includes('Compilation complete')) {
            isReached = true;
            process.send('get completion');
        };
    }
}


const main = async () => {
    console.log('run', task);

    const childProcess = exec(task)

    await echoReadable(childProcess);

    console.log('exit child');
};

main();
