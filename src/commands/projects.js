import * as fmt from "../formatting.js";


function printProjects(args, terminal) {
    terminal.writeln(fmt.surround([
      fmt.bold(`${fmt.blue("Senior Cloud Engineer")} - Telenet (via dataroots)`),
      fmt.italic("Jan 2024 - Present"),
      `Architect and build Telenet's data and MLOps platform. I collaborate in a small`,
      `team of junior and senior engineers towards the delivery and maintenance of a`,
      `platform on AWS. We offer a wide range of data processing and Machine Learning`,
      `capabilities towards Telenet's data experts.`,
      `${fmt.bold("Technologies:")}: AWS (EKS, EMR, Sagemaker, Batch, ...), Terraform, Snowflake, Python`,
      ``,
      fmt.bold(`${fmt.blue("Cloud Engineer")} - KBC (via dataroots)`),
      fmt.italic("Sep 2022 - Dec 2023"),
      `Cloud Engineer in the Platform Infrastructure team. I was part of a large team`,
      `building the platform. We took a huge step towards automatic and continuous`,
      `deployment and managed an Airflow deployment for users.`,
      `${fmt.bold("Technologies:")} AWS, Terraform, k8s, Python`,
      ``,
      fmt.bold(`${fmt.blue("Data Engineer")} - KBC (via dataroots)`),
      fmt.italic("Sep 2021 - Sep 2022"),
      `We brought the first technical skills to a team developing data pipelines, which `,
      `required an understanding of the business background. In addition, we developed`,
      `a product to automate GDPR compliancy for all data leaving KBC's data platform.`,
      `${fmt.bold("Technologies:")} Python, pyspark, git`
     ],[17, 8, 0, 0, 0, 0, 8, 0, 17, 8, 0, 0, 0, 8, 0, 17, 8, 0, 0, 0, 8]))
}

export const projects = {"name": "projects", "fn": printProjects, "description": "Show an overview of my projects"};
