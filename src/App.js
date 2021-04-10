import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  resetFilter = () => {
    this.setState({ filter: '' });
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

    toast.success(`Контакт "${name}" успішно добавлений в вашу книгу`);
  };

  deleteContact = id => {
    toast.warn(`Увага! Ви щойно видалили контакт`);
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  visibleContacts = () => {
    const normaliseFilter = this.state.filter.toLocaleLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normaliseFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.visibleContacts();

    return (
      <>
        <Header />
        <Layout>
          <div className="AppWrap">
            <Sidebar />
            <Content
              visibleContacts={visibleContacts}
              contacts={contacts}
              filter={filter}
              onAddContact={this.addContact}
              onChange={this.handleChangeFilter}
              onReset={this.resetFilter}
              onDeleteContact={this.deleteContact}
            />
          </div>

          <ToastContainer position="top-right" autoClose={5000} />
        </Layout>
      </>
    );
  }
}

export default App;
