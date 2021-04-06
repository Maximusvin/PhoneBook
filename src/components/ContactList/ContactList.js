import s from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <div>
    <h2 className={s.title}>Contacts</h2>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
