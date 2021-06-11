import React from "react";
import Notification from "../notification/Notification";
import styles from "./Statistics.module.css";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

  return (
    <>
      {total ? (
        <>
          <p className={styles.count}>Good: {good}</p>
          <p className={styles.count}>Neutral: {neutral}</p>
          <p className={styles.count}>Bad: {bad}</p>
          <p className={styles.count}>Total: {total}</p>
          <p className={styles.count}>
            Positive feedback:
            <span className={styles.percent}>{positivePercentage} %</span>
          </p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};