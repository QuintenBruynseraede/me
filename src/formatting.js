
export function red(text) {
    return `\u001b[31m${text}\u001b[0m`;
}

export function green(text) {
    return `\u001b[32m${text}\u001b[0m`;
}

export function yellow(text) {
    return `\u001b[33m${text}\u001b[0m`;
}

export function blue(text) {
    return `\u001b[34m${text}\u001b[0m`;
}

export function cyan(text) {
    return `\u001b[36m${text}\u001b[0m`;
}


export function newInputLine() {
    return '$ ';
}