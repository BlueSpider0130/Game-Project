const { execSync } = require('child_process');
const minimist = require('minimist');

const exec = (command) => {
    execSync(command, { stdio: 'inherit' });
};

const args = process.argv.slice(2);
const additionalArgs = minimist(args);
const { ignore: ignoreLeft } = additionalArgs;
const [command, ...passArgs] = args;

const main = async () => {
    const args = passArgs || [];
    const leftArgs = [];
    let commandToExecute = command;
    args.forEach((arg, index) => {
        let replaced = false;
        commandToExecute = commandToExecute.replaceAll(`{${index}}`, (token) => {
            replaced = true;
            return arg;
        });

        if (!ignoreLeft && !replaced) leftArgs.push(arg);
    });
    const commandToExecuteFinal = `${commandToExecute} ${leftArgs.join(' ')}`;
    console.log(`run command: ${commandToExecuteFinal}`);
    exec(commandToExecuteFinal);
};

main();
