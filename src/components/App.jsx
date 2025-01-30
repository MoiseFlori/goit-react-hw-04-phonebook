import React, { Component } from 'react';
import { nanoid } from 'nanoid'; 
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import styles from './Phonebook.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
      ],
      name: '',
      phoneNumber: '',
      filter: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, phoneNumber, contacts } = this.state;

    if (name.trim() === '' || phoneNumber.trim() === '') return; 

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newContact = { id: nanoid(), name, phoneNumber };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      phoneNumber: '',
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, name, phoneNumber, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          phoneNumber={phoneNumber} 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
