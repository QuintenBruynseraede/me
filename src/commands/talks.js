import * as fmt from "../formatting.js";


function printTalks(args, terminal) {
    terminal.writeln(fmt.surround([
        `${fmt.green(fmt.bold("Maybe I can give a talk at your event?"))}`,
        `I'd love to speak about these topics: Terraform, IaC, DevOps, SRE, automation, ...`,
        ``,
        `Past events:`,
        ``,
        `${fmt.italic("tf-profile, our Swiss Army Knife to debug Terraform")}`,
        `08-02-2024    HashiCorp UG Belgium    https://www.meetup.com/belgium-hashicorp-user-group/events/298277708/`,
     ],[17, 0, 0, 0, 0, 8, 0]));
}

export const talks = {"name": "talks", "fn": printTalks, "description": "Overview of past and future talks"};
