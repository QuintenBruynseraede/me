
import * as fmt from "../formatting.js";


function printSkills(args, terminal) {
    terminal.writeln(fmt.surround([
        `${fmt.blue(fmt.bold("Things I can help you do the right way:"))}`,
        `Python      ☆☆☆☆☆`,
        `k8s         ☆☆☆☆☆`,
        `Terraform   ☆☆☆☆☆`,
        `AWS         ☆☆☆☆☆`,
        `Airflow     ☆☆☆☆☆`,
        ``,
        `${fmt.blue(fmt.bold("Things I know how to do"))}`,
        `Grafana     ☆☆☆☆`,
        `Dagster     ☆☆☆☆`,
        `Golang      ☆☆☆☆`,
        `SQL         ☆☆☆☆`,
        `pyspark     ☆☆☆☆`,
        `Linux       ☆☆☆☆`,
        `Atlassian   ☆☆☆☆`,
        `Javascript  ☆☆☆☆`,
        ``,
        `${fmt.blue(fmt.bold("Things I know a bit"))}`,
        `Snowflake   ☆☆☆`,
        `C++         ☆☆☆`,
        `Java        ☆☆☆`,
        `dbt         ☆☆☆`,
        ``,
        `${fmt.italic("Note: this is self-evaluated and based on... nothing")}`,
     ],[17,0,0,0,0,0,0,17,0,0,0,0,0,0,0,0,0,17,0,0,0,0,0,8]))
}

export const skills = {"name": "skills", "fn": printSkills, "description": "Lean what I'm good at"};
