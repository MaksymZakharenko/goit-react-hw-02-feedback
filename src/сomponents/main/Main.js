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
      <div className={styles.container}>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            countGoodFeedback={this.countGoodFeedback}
            countNeutralFeedback={this.countNeutralFeedback}
            countBadFeedback={this.countBadFeedback}
          />
        </Section>
        <div className={styles.statistics}>
          <Section title={"Statistics"}>
            <Statistics
              state={this.state}
              countGoodFeedback={this.countGoodFeedback}
              countNeutralFeedback={this.countNeutralFeedback}
              countBadFeedback={this.countBadFeedback}
              total={this.total}
              positivePercentage={this.positivePercentage}
            />
          </Section>
        </div>
      </div>
    );
  }
}

export default Main;
