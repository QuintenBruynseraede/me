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

export function bold(text) {
    return `\x1b[1m${text}\x1b[0m`;
}

export function italic(text) {
    return `\x1b[3m${text}\x1b[0m`;
}

export function surround(lines, padding) {
    let longest_line_length = Math.max(...(lines.map(l => l.length)));
    
    let first_line = "┌"+"─".repeat(longest_line_length+2)+"┐";
    let last_line = "└"+"─".repeat(longest_line_length+2)+"┘";
    
    let output = [first_line];
    for (let i=0;i<lines.length;i++) {
        let formatted = (
            "│ " +
            lines[i] + 
            " ".repeat(longest_line_length-lines[i].length) +
            " ".repeat(padding[i]) + 
            " │"
        )
        output.push(formatted);
    }
    output.push(last_line);
    return output.join("\n\r");
}
