import React from 'react';
import styles from './Phonebook.module.css';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      className = {styles.input}
      value={filter}
      onChange={onFilterChange}
      placeholder="Find contact by name ..."
    />
  );
};

export default Filter;
