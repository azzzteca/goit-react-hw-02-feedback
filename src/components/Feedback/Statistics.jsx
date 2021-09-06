import s from '../Feedback/Feedback.module.css';

export function Statistics({ total, positivePercentage, good, neutral, bad }) {
  return good + neutral + bad === 0 ? (
    <h3 className={s.noFeedbackMassage}>No feedback given</h3>
  ) : (
    <div>
      <h2>Statistics</h2>
      <ul className={s.statisticsInfo}>
        <li className={s.item}>
          <span className={s.itemInfo}>Good: {good}</span>
        </li>
        <li className={s.item}>
          <span className={s.itemInfo}>Neutral: {neutral}</span>
        </li>
        <li className={s.item}>
          <span className={s.itemInfo}>Bad: {bad}</span>
        </li>
        <li className={s.item}>
          <span className={s.itemInfo}>Total: {total(good, neutral, bad)}</span>
        </li>
        <li className={s.item}>
          <span className={s.itemInfo}>
            Positive feedback: {positivePercentage(good, neutral, bad)}
          </span>
        </li>
      </ul>
    </div>
  );
}
