import s from './Filter.module.css';

const Filter = ({ onChange, value, onReset }) => (
  <div className={s.wrap}>
    <p>Пошук контакту по імені</p>

    <input
      type="text"
      placeholder="Фільтр"
      className={s.input}
      onChange={onChange}
      value={value}
    />
    <button type="button" onClick={onReset} className={s.btn} disabled={!value}>
      Очистити
    </button>
  </div>
);

export default Filter;
