import React from 'react';
import styles from './Phonebook.module.css';

const ContactList = ({ contacts,deleteContact }) => {
  return (
    <ul className={styles.contactList} 
    >
      {contacts.map(contact => (
        <li className={styles.contactItem} key={contact.id}>
          {contact.name}: {contact.phoneNumber}
          <button className={styles.deleteButton} onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
