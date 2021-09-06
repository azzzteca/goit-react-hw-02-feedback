import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from '../../counters/counters';

function Feedback({ feedback, changeCoutFeedback }) {
  const { good, neutral, bad } = feedback;

  return (
    <div>
      <Section title="Please leave feedback" />
      <FeedbackOptions changeCoutFeedback={changeCoutFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </div>
  );
}

export default Feedback;
