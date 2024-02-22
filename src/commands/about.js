import * as fmt from "../formatting.js";

export const about = {"name": "about", "fn": printAbout, "description": "Print some general information about me"};

function printAbout(args, terminal) {
    terminal.writeln(surround([
        "😀 Hi there!", 
        `My name is ${fmt.green("Quinten Bruynseraede")}. I am a Data & Cloud Engineer at dataroots`,
        "",
        "👶  Date of birth: 13/9/1998 (25 years old)",
        "🧭  Location: Leuven, Belgium",
        "⚽  Hobbies: soccer, cycling, science fiction novels, programming",
        "🧠  Professional interests: Python, golang, Terraform, Devops, AWS",
        "",
        "Find me on these platforms:",
        `Github:   ${fmt.cyan("https://github.com/QuintenBruynseraede")}`,
        `LinkedIn: ${fmt.cyan("https://www.linkedin.com/in/quinten-bruynseraede-57289515b/")}`
    ], [1, 9, 0, 1, 1, 0, 1, 0, 0, 9, 9]));
}

function surround(lines, padding) {
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
    console.log(output);
    return output.join("\n\r");
}