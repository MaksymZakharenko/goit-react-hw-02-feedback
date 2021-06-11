import React from "react";
import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const feedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button
        type="button"
        className={styles.item_good}
        onClick={() => onLeaveFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.item_neutral}
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.item_bad}
        onClick={() => onLeaveFeedback("bad")}
      >
        Bad
      </button>
    </>
  );
};

export default feedbackOptions;

feedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
