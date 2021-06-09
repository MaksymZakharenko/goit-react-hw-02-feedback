import React from "react";
import styles from "./FeedbackOptions.module.css";

const feedbackOptions = ({
  countGoodFeedback,
  countNeutralFeedback,
  countBadFeedback,
}) => {
  return (
    <>
      <button
        type="button"
        className={styles.item_good}
        onClick={() => countGoodFeedback(1)}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.item_neutral}
        onClick={() => countNeutralFeedback(1)}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.item_bad}
        onClick={() => countBadFeedback(1)}
      >
        Bad
      </button>
    </>
  );
};

export default feedbackOptions;
