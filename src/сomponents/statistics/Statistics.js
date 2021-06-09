import React from "react";
import Notification from "../notification/Notification";
import styles from "./Statistics.module.css";

const Statistics = ({
  state,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total() > 0 ? (
        <>
          <p className={styles.count}>Good: {state.good}</p>
          <p className={styles.count}>Neutral: {state.neutral}</p>
          <p className={styles.count}>Bad: {state.bad}</p>
          <p className={styles.count}>Total: {total()}</p>
          <p className={styles.count}>
            Positive feedback: <span className={styles.percent}>{positivePercentage()} %</span>
          </p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

export default Statistics;

