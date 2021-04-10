import ContactEditor from '../ContactEditor';
import ContactList from '../ContactList';
import FirstMessageToContact from '../FirstMessageToContact';
import { useState } from 'react';

import s from './Content.module.css';

const Content = ({
  visibleContacts,
  contacts,
  filter,
  onChange,
  onAddContact,
  onReset,
  onDeleteContact,
}) => {
  const [showContactEditor, setShowContactEditor] = useState(false);

  const toggleContactEditor = () => {
    setShowContactEditor(!showContactEditor);
  };

  return (
    <div className={s.wrap}>
      {contacts.length > 0 ? (
        <ContactList
          visibleContacts={visibleContacts}
          onDeleteContact={onDeleteContact}
          onChange={onChange}
          value={filter}
          onReset={onReset}
          onToggleContactEditor={toggleContactEditor}
        />
      ) : (
        <FirstMessageToContact onToggleContactEditor={toggleContactEditor} />
      )}

      <ContactEditor
        onAddContact={onAddContact}
        contacts={contacts}
        showModal={showContactEditor}
        onToggleContactEditor={toggleContactEditor}
      />
    </div>
  );
};

export default Content;
