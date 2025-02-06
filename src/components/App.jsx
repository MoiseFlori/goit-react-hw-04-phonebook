import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import contactsData from './contactsData.json';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import styles from './Phonebook.module.css';

const App = () => {
  const [formData, setFormData] = useState({ name: '', phoneNumber: '' });
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);



  // incarca contactele din localStorage la montarea componentei
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts && JSON.parse(savedContacts).length > 0) {
      setContacts(JSON.parse(savedContacts));
    } else {
      setContacts(contactsData);
      localStorage.setItem('contacts', JSON.stringify(contactsData));
    }
    console.log('Contacts mount:', contacts);
  }, []); // dependența goala face ca acest efect sa ruleze doar o data la montarea componentei


  // salveaza contactele in localStorage la fiecare actualizare a listei de contacte
  useEffect(() => {
 
    if (contacts.length > 0) {
      // evita salvarea unui array gol in localStorage
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    console.log('Contacts updated:', contacts);
  }, [contacts]); // dependenta [contacts] face ca acest efect sa ruleze doar cand contacts se actualizeaza


  //event handler pentru actualizarea formData la fiecare schimbare in input
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  //event handler pentru submit formular
  const handleSubmit = event => {
    event.preventDefault();
    const { name, phoneNumber } = formData;

    if (name.trim() === '' || phoneNumber.trim() === '') return;

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newContact = { id: nanoid(), name, phoneNumber };
    setContacts(prevContacts => [...prevContacts, newContact]);
    setFormData({ name: '', phoneNumber: '' }); // Reset form
  };

  //event handler pentru a accesa valoarea introdusa de utilizator in campul de input si actualizeaza starea `filter` cu aceasta.
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  //functie  pentru a sterge un contact din lista si actualizeaza starea `contacts` cu aceasta.
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  //filtreaza contactele in functie de valoarea introdusa de utilizator in campul de input
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm
        name={formData.name}
        phoneNumber={formData.phoneNumber}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
