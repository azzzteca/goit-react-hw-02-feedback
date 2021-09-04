import s from './Feedback.module.css';

function countTotalFeedback(feedback) {
  const { good, neutral, bad } = feedback;
  return good + neutral + bad;
}

function countPositiveFeedbackPercentage(feedback) {
  const { good, neutral, bad } = feedback;
  if (good !== 0) {
    if (neutral + bad === 0) {
      return 100 + ' %';
    } else {
      return Math.round((good / (good + neutral + bad)) * 100) + ' %';
    }
  }

  return 0 + '%';
}

function Feedback({ feedback }) {
  const { good, neutral, bad } = feedback;

  return (
    <div>
      <h2> Please leave feedback</h2>
      <form
        className={s.form}
        onClick={evt => {
          console.log(evt.target.id);
        }}
      >
        <button id="good" type="button" className={s.button}>
          Good
        </button>
        <button id="neutral" type="button" className={s.button}>
          Neutral
        </button>
        <button id="bad" type="button" className={s.button}>
          Bad
        </button>
      </form>

      <div>
        <h2>Statistics</h2>
        <ul className={s.statisticsInfo}>
          <li>
            <span>Good: {good}</span>
          </li>
          <li>
            <span>Neutral: {neutral}</span>
          </li>
          <li>
            <span>Bad: {bad}</span>
          </li>
          <li>
            <span>Total: {countTotalFeedback(feedback)}</span>
          </li>
          <li>
            <span>
              Positive feedback: {countPositiveFeedbackPercentage(feedback)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Feedback;
