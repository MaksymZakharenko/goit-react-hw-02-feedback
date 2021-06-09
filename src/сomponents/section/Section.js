import React from "react";
import styles from "./Section.module.css"
const Section = ({ children }) => {
  return (
    <section>
      <h2 className={styles.title}>Please leave feedback</h2>
      {children}
    </section>
  );
};

export default Section;
