import { GrFormClose } from 'react-icons/gr';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <div className={s.wrap}>
    <h2 className={s.title}>Contacts</h2>
    <ul>
      {contacts.map(({ id, name, number }) => {
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

export default ContactList;
