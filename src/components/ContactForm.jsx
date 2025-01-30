import React from 'react';
import styles from './Phonebook.module.css';

const ContactForm = ({ name, number, onChange, onSubmit }) => {
  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label}>
          <span className={styles.labelText}>Name</span>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            pattern="^[a-zA-Z]+((['\- ][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
        </label>
        <label className={styles.label}>
       <span className={styles.labelText}>Number</span>
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={onChange}
            pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      <button className={styles.addButton} type="submit">
        Add contact
      </button>
      </form>
    </>
  );
};

export default ContactForm;
