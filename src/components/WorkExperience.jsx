import React from "react";
import styles from "./WorkExperience.module.scss";

const WorkExperience = () => (
  <section className={styles.section}>
    <h2>Work Experience</h2>

    <h3>Associate Consultant – Capgemini (Feb 2021 – Present)</h3>
    <p><strong>Client:</strong> Hindustan Unilever (Modern Trade)</p>
    <ul>
      <li>Built and maintained Spark-based ETL pipelines</li>
      <li>Automated tasks with Presto SQL</li>
      <li>Performed data analysis to improve quality and insights</li>
      <li>Led modernization initiatives for scalability</li>
    </ul>

    <p><strong>Client:</strong> Hindustan Unilever (General Trade)</p>
    <ul>
      <li>Automated bulk calculations on large datasets</li>
      <li>Created business reports for decision making</li>
      <li>Used advanced SQL for performance</li>
    </ul>

    <p><strong>Client:</strong> Hindustan Unilever (Nutrition)</p>
    <ul>
      <li>Generated validation reports to ensure data accuracy</li>
      <li>Monitored jobs and workflow execution</li>
      <li>Followed Agile methodology and JIRA tracking</li>
    </ul>
  </section>
);

export default WorkExperience;
