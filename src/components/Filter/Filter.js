import s from './Filter.module.css';

const Filter = ({ onChange, value, onReset }) => (
  <div className={s.wrap}>
    <input
      type="text"
      placeholder="Фільтр по імені"
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
