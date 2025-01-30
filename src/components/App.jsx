import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';  
import styles from './Phonebook.module.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
  ]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    name === 'name' ? setName(value) : setPhoneNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '') return;
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const newContact = { id: nanoid(), name, phoneNumber };
    setContacts(prevContacts => [...prevContacts, newContact]);

    setName(''); 
    setPhoneNumber(''); 
  };

  const handleFilterChange = event => {
    setFilter(event.target.value); 
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const removeContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={phoneNumber}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <h1>Contacts</h1>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={removeContact} />
    </div>
  );
};

export default App;
