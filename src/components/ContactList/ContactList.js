import { GrFormClose } from 'react-icons/gr';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

import Filter from '../Filter';
import s from './ContactList.module.css';

const ContactList = ({
  visibleContacts,
  onDeleteContact,
  onChange,
  value,
  onReset,
  onToggleContactEditor,
}) => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
    onReset();
  };

  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <h2 className={s.title}>Контакти</h2>
        {showFilter && (
          <Filter onChange={onChange} value={value} onReset={onReset} />
        )}
        <div className={s.controls}>
          <button
            type="button"
            className={s.controlsBtn}
            onClick={onToggleContactEditor}
          >
            <AiOutlineUserAdd className={s.iconBtn} />
          </button>
          <button
            type="button"
            className={s.controlsBtn}
            onClick={toggleFilter}
          >
            <AiOutlineSearch className={s.iconBtn} />
          </button>
        </div>
      </div>
      <ul>
        {visibleContacts.map(({ id, name, number }) => {
          const tel = `tel: ${number}`;
          return (
            <li key={id} className={s.item}>
              <div>
                {name}: <a href={tel}>{number}</a>
              </div>
              <button
                type="button"
                className={s.btn}
                onClick={() => onDeleteContact(id)}
              >
                <GrFormClose className={s.icon} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
