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

  // countGoodFeedback = () => {
  //   this.setState((prevState) => {
  //     const { good } = prevState;
  //     return {
  //       good: good + 1,
  //     };
  //   });
  // };

  // countNeutralFeedback = () => {
  //   this.setState((prevState) => {
  //     const { neutral } = prevState;
  //     return {
  //       neutral: neutral + 1,
  //     };
  //   });
  // };

  // countBadFeedback = () => {
  //   this.setState((prevState) => {
  //     const { bad } = prevState;
  //     return {
  //       bad: bad + 1,
  //     };
  //   });
  // };

  onLeaveFeedback = (scoreName) => {
    this.setState((prevState) => {
      const oldValue = prevState[scoreName];
      return {
        [scoreName]: oldValue + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={styles.container}>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <div className={styles.statistics}>
          <Section title={"Statistics"}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        </div>
      </div>
    );
  }
}

export default Main;
