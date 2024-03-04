import * as util from './src/util.js';
import * as keys from './src/keycodes.js';
import * as fmt from './src/formatting.js';
import { runCommand, parseCommand } from './src/command.js';

var t = new Terminal();
var current_line = "";
var past_inputs = [];
var past_inputs_scroll_idx = undefined;

function handleKeyStroke(e) {
    // Enter
    if (e.key == keys.RETURN) {
        t.write('\n\r');

        let cmd = parseCommand(current_line, t);
        if (cmd !== undefined) {
            runCommand(cmd.name, cmd.args, t);
        }
        
        if (current_line.trim().length > 0)
            past_inputs.push(current_line.trim());
    
        past_inputs_scroll_idx = undefined;
        current_line = '';
        t.write(fmt.newInputLine());
    } else if (e.key == keys.EOT) {
        // Ctrl+C
        t.write(' Aborted.\n\r');
        current_line = '';
        t.write(fmt.newInputLine());
        past_inputs_scroll_idx = undefined;
    } else if (e.key == keys.ARROW_UP) {
        if (past_inputs.length == 0) return;

        if (past_inputs.length > 0) {
            if (past_inputs_scroll_idx == 0 || past_inputs_scroll_idx === undefined)
                past_inputs_scroll_idx = past_inputs.length - 1;
            else
                past_inputs_scroll_idx -= 1;
        }

        _loadPreviousInput(past_inputs_scroll_idx);
    } else if (e.key == keys.ARROW_DOWN) {
        if (past_inputs.length == 0) return;

        if (past_inputs_scroll_idx === undefined)
            past_inputs_scroll_idx = 0;
        else 
            past_inputs_scroll_idx = (past_inputs_scroll_idx + 1) % past_inputs.length;

        _loadPreviousInput(past_inputs_scroll_idx);
    } else if (e.key == keys.BACKSPACE && current_line.length > 0) {
        // Backspace
        t.write('\b \b');
        current_line = current_line.slice(0, -1);
    } else if (util.isValidInputCharacter(e.key)) {
        current_line += e.key;
        t.write(e.key);
        past_inputs_scroll_idx = undefined;
    }
}

function initializeTerminal() {
    const fitAddon = new FitAddon.FitAddon();

    t.loadAddon(new WebLinksAddon.WebLinksAddon());
    t.loadAddon(fitAddon);
    t.open(document.getElementById('terminal'));
    fitAddon.fit();
    
    t.onKey(handleKeyStroke);
   
    t.write(`Welcome to my interactive ${fmt.red('Terminal!')}\n\r`);
    t.write(`Use 'help' to see all available commands\n\r`); 
    t.write(fmt.newInputLine());
}


function _loadPreviousInput(idx) {
    current_line = past_inputs[idx];
    t.write('\x1b[2K\r')  // clear line
    t.write(`${fmt.newInputLine()}${current_line}`);
}
initializeTerminal();
