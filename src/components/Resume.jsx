import React from "react";
import styles from "./Resume.module.scss";
import ContactInfo from "./ContactInfo";
import CareerObjective from "./CareerObjective";
import Skills from "./Skills";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const Resume = () => {
  return (
    <div className={styles.container}>
      <h1>Susmita Das</h1>
      <ContactInfo />
      <CareerObjective />
      <Skills />
      <Education />
      <WorkExperience />
    </div>
  );
};

export default Resume;
