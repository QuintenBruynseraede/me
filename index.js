import * as util from './src/util.js';
import * as keys from './src/keycodes.js';
import * as fmt from './src/formatting.js';

var t = new Terminal({cols: 120});
var current_line = "";
var past_inputs = [];

function handleKeyStroke(e) {
    console.log(e.key);
    console.log(e);

    // Enter
    if (e.key == keys.RETURN) {
        console.log(`Fire: ${current_line}`);
        t.write(fmt.newInputLine());
    } else if (e.key == keys.EOT) {
        // Ctrl+C
        t.write(' Aborted.');
        current_line = '';
        t.write(fmt.newInputLine());
    } else if (e.key == keys.BACKSPACE && current_line.length > 0) {
        // Backspace
        current_line = current_line.slice(0, -1);
        console.log(current_line);
        t.write('\b \b');
    } else if (util.isValidInputCharacter(e.key)) {
        current_line += e.key;
        t.write(e.key);
    }
}


function initializeTerminal() {
    t.open(document.getElementById('terminal'));
    t.onKey(handleKeyStroke);
    t.write(`Welcome to my interactive ${fmt.red('Terminal!')}`);
    t.write(fmt.newInputLine());
}

initializeTerminal();