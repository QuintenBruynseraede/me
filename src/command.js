import { clear } from './commands/clear.js';
import { portrait } from './commands/portrait.js';
import { about } from './commands/about.js';
import { projects } from './commands/projects.js';
import { skills } from './commands/skills.js';

import * as fmt from './formatting.js';

const COMMANDS = [
    {"name": "help", "fn": printHelp, "description": "List all available commands"}, 
    {"name": "", "description": ""},  // Spacer  
    portrait,
    about,
    projects,
    skills,
    {"name": "", "description": ""},  // Spacer   
    clear 
];

export function runCommand(command, args, terminal) {
    for (let i = 0; i < COMMANDS.length; i++) {
        if (COMMANDS[i].name == command) {
            COMMANDS[i].fn(args, terminal);
            return;
        }
    }

    terminal.writeln(`Unknown command: ${command}`);
}

export function printHelp(args, terminal) {
    let helpText = [
        fmt.bold(`${fmt.blue("List of available commands: ")}`),
        "",
    ];

    for (let i = 0; i < COMMANDS.length; i++) {
        let cmd = COMMANDS[i];
        helpText.push(`${cmd.name}${" ".repeat(10-cmd.name.length)}${cmd.description}`);
    } 

    terminal.writeln(fmt.surround(helpText, [17]));
}

export function parseCommand(input, terminal) {
    if (input.length == 0) {
        return;
    }
    let tokens = input.split(" ").filter(token => token != '');
    return {"name": tokens[0], "args": tokens.slice(1)};
}
