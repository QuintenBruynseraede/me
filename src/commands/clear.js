export const clear = {"name": "clear", "fn": clearTerminal, "description": "Clear the terminal"};

function clearTerminal(args, terminal) {
    terminal.reset();
}