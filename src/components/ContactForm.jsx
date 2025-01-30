import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

class ContactForm extends Component {
  render() {
    const { name, phoneNumber, onChange, onSubmit } = this.props;

    return (
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
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={styles.addButton}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
