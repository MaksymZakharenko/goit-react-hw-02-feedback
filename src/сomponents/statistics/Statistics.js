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
      <h2>Statistics:</h2>
      {total() > 0 ? (
        <>
          <span className={styles.count}>Good: {state.good}</span>
          <span className={styles.count}>Neutral: {state.neutral}</span>
          <span className={styles.count}>Bad: {state.bad}</span>
          <span className={styles.count}>Total: {total()}</span>
          <span className={styles.count}>
            Positive feedback: <span className={styles.percent}>{positivePercentage()} %</span>
          </span>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

export default Statistics;

