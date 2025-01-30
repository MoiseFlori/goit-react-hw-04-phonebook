import React from 'react';
import styles from './Phonebook.module.css';
import PropTypes from 'prop-types'

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactList;
