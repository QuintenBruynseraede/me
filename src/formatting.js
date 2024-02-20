
export function red(text) {
    return `\x1B[1;3;31m${text}\x1B[0m `;
}

export function newInputLine() {
    return '\n\r$ ';
}