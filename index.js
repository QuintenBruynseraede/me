import * as util from './src/util.js';
import * as keys from './src/keycodes.js';
import * as fmt from './src/formatting.js';
import { runCommand, parseCommand } from './src/command.js';

var t = new Terminal({cols: 200, rows: 200});
var current_line = "";
var past_inputs = [];

function handleKeyStroke(e) {
    // Enter
    if (e.key == keys.RETURN) {
        t.write('\n\r');

        let cmd = parseCommand(current_line, t);
        if (cmd !== undefined) {
            runCommand(cmd.name, cmd.args, t);
        }

        past_inputs.push(current_line);
        current_line = ''; 

        t.write(fmt.newInputLine());
    } else if (e.key == keys.EOT) {
        // Ctrl+C
        t.write(' Aborted.');
        current_line = '';
        t.write(fmt.newInputLine());
    } else if (e.key == keys.BACKSPACE && current_line.length > 0) {
        // Backspace
        current_line = current_line.slice(0, -1);
        t.write('\b \b');
    } else if (util.isValidInputCharacter(e.key)) {
        current_line += e.key;
        t.write(e.key);
    }
}

function initializeTerminal() {
    t.open(document.getElementById('terminal'));
    t.onKey(handleKeyStroke);
    t.write(`Welcome to my interactive ${fmt.red('Terminal!')}\n\r`);
    t.write(`Use 'help' to see all available commands\n\r`); 
    t.write(fmt.newInputLine());
}

initializeTerminal();