import { hello } from './commands/hello.js';
import { clear } from './commands/clear.js';

const COMMANDS = [
    {"name": "help", "fn": printHelp, "description": "List all available commands"},    
    hello,
    clear,
];

export function runCommand(command, args, terminal) {
    for (let i = 0; i < COMMANDS.length; i++) {
        if (COMMANDS[i].name == command) {
            console.log(`Trigger: ${COMMANDS[i]}`);
            COMMANDS[i].fn(args, terminal);
            return;
        }
    }

    terminal.write(`Unknown command: ${command}`);
}

export function printHelp(args, terminal) {
    terminal.write("List of available commands: \n\r");
    for (let i = 0; i < COMMANDS.length; i++) {
        let cmd = COMMANDS[i];
        terminal.write(`${cmd.name}${" ".repeat(10-cmd.name.length)}${cmd.description}\n\r`);
    } 
}

export function parseCommand(input, terminal) {
    let tokens = input.split(" ").filter(token => token != '');
    return {"name": tokens[0], "args": tokens.slice(1)};
}