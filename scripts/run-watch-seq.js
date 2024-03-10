const { execSync, fork, spawn } = require('child_process');
const { onExit, chunksToLinesAsync, chomp } = require('@rauschma/stringio');

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const tasks = args._;

const runTask = (task) => {
    childProcess = fork(`${__dirname}/run-watch-seq.child.js`, [task]);

    childProcess.on('message', (data) => {
        runTask(tasks.shift());
    });
}

const holdThread = () => new Promise(resolve => { });

const waitUntilArrayIsNotEmpty = (array) => {
    return new Promise(resolve => {
        if (array.length === 0) {
            resolve();
            return
        }

        const interval = setInterval(() => {
            if (array.length !== 0) return;
            clearInterval(interval);
            resolve();
        }, 500);
    });
}

const main = async () => {
    runTask(tasks.shift());

    await holdThread();

    console.log('exit parent');
};

main();
