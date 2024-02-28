import * as fmt from "../formatting.js";

export const about = {"name": "about", "fn": printAbout, "description": "Print some general information about me"};

function printAbout(args, terminal) {
    terminal.writeln(fmt.surround([
        "😀 Hi there!", 
        `My name is ${fmt.green("Quinten Bruynseraede")}. I am a Data & Cloud Engineer at dataroots`,
        "",
        "👶  Date of birth: 13/9/1998 (25 years old)",
        "🧭  Location:      Leuven, Belgium",
        "⚽  Hobbies:       football, cycling, science fiction novels, programming",
        "🧠  Interests:     Linux, Python, golang, Terraform, Devops, AWS, neovim",
        "",
        "Find me on these platforms:",
        `Github:   ${fmt.cyan("https://github.com/QuintenBruynseraede")}`,
        `LinkedIn: ${fmt.cyan("https://www.linkedin.com/in/quinten-bruynseraede-57289515b/")}`
    ], [1, 9, 0, 1, 1, 0, 1, 0, 0, 9, 9]));
}

