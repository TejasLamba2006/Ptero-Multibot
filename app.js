// Please skip this stuff and go to line 45

const { exec } = require('child_process');
const chalk = require('chalk');

info('--------------');
info('By BasToTheMax');
info('--------------');
info('');
info('');

var count;
count = 0;

function start(file) {
    count = count + 1;
    exec('node '+file+'.js', (err, stdout, stderr) => {
        if (err) {
            // console.log(err);
            count = count - 1;
            error(`${chalk.red(`Stopped ${file}.js!`)} | ${chalk.green(`${count} bots online!`)}`);
        }
    }); 
    info(`${chalk.green(`Started ${file}.js!`)}`);
}
function info(text) {
    console.log(`${chalk.white('[')} ${chalk.green('-')} ${chalk.white(']')} ${text}`);
}
function error(text) {
    console.log(`${chalk.white('[')} ${chalk.red('x')} ${chalk.white(']')} ${text}`);
}













// MAIN PROGRAM! :D

start('bot1'); // It will automatically add `.js`
start('bot2');



// Please do not edit this code
info('');
info('');
info('--------------')
info(`${chalk.green(`Started ${count} bots!`)}`);
info('--------------');
