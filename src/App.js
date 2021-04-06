import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Layout from './components/Layout/Layout';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';

import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Layout>
        <ContactEditor onAddContact={this.addContact} />
        <ContactList contacts={contacts} />
      </Layout>
    );
  }
}

export default App;
