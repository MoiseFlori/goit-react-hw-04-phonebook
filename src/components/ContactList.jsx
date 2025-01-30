import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul className={styles.contactList}>
        {contacts.map(contact => (
          <li className={styles.contactItem} key={contact.id}>
            {contact.name}: {contact.phoneNumber}
            <button
              className={styles.deleteButton}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
