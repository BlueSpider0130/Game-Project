const fs = require('fs');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const [pathToWait] = args._;

console.log(`Waiting for ${pathToWait} is created...`);

const waitFor = (path) => {
    if (fs.existsSync(path)) {
        console.log('folder created', path)
        return;
    };
    setTimeout(() => waitFor(path), 1000);
};

waitFor(pathToWait);
