import s from './Feedback.module.css';

export function FeedbackOptions({ changeCoutFeedback }) {
  return (
    <form className={s.form} onClick={changeCoutFeedback}>
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
  );
}
