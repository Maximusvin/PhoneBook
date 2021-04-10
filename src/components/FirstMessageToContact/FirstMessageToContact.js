import s from './FirstMessageToContact.module.css';

const FirstMessageToContact = ({ onToggleContactEditor }) => (
  <div className={s.wrap}>
    <p className={s.text}>Ваша телефона книга порожня</p>
    <p className={s.text}>Добавте свій перший контакт</p>
    <button type="button" className={s.btn} onClick={onToggleContactEditor}>
      Добавити
    </button>
  </div>
);

export default FirstMessageToContact;
