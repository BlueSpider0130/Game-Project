const { execSync } = require('child_process');
const minimist = require('minimist');

const exec = (command) => {
    execSync(command, { stdio: 'inherit' });
};

const args = minimist(process.argv.slice(2));
const [command, ...questions] = args._;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const questionAsk$ = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const main = async () => {
    const answers = [];
    const leftArgs = [];
    for (let question of questions) {
        const answer = await questionAsk$(`${question}: `);
        answers.push(answer);
    }

    let commandToExecute = command;
    answers.forEach((answer, index) => {
        let replaced = false;
        commandToExecute = commandToExecute.replaceAll(`{${index}}`, () => {
            replaced = true;
            return answer;
        });
        if (!replaced) leftArgs.push(answer);
    });
    const commandToExecuteFinal = `${commandToExecute} ${leftArgs.join(' ')}`;
    console.log(`run command: ${commandToExecuteFinal}`);
    exec(commandToExecuteFinal);
    rl.close();
};

main();
