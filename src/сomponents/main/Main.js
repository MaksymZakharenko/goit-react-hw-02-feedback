import { Component } from "react";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Section from "../section/Section";
import Statistics from "../statistics/Statistics";
import styles from "./Main.module.css";

class Main extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodFeedback = () => {
    this.setState((prevState) => {
      const { good } = prevState;
      return {
        good: good + 1,
      };
    });
  };

  countNeutralFeedback = () => {
    this.setState((prevState) => {
      const { neutral } = prevState;
      return {
        neutral: neutral + 1,
      };
    });
  };

  countBadFeedback = () => {
    this.setState((prevState) => {
      const { bad } = prevState;
      return {
        bad: bad + 1,
      };
    });
  };

  total = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  positivePercentage = () => {
    const { good } = this.state;
    const total = this.total();
    const positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

  render() {
    return (
      <Section>
        <div className={styles.container}>
          <FeedbackOptions
            countGoodFeedback={this.countGoodFeedback}
            countNeutralFeedback={this.countNeutralFeedback}
            countBadFeedback={this.countBadFeedback}
          />
          <div className={styles.statistics}>
            <Statistics
              state={this.state}
              countGoodFeedback={this.countGoodFeedback}
              countNeutralFeedback={this.countNeutralFeedback}
              countBadFeedback={this.countBadFeedback}
              total={this.total}
              positivePercentage={this.positivePercentage}
            />
          </div>
        </div>
      </Section>
    );
  }
}

export default Main;
