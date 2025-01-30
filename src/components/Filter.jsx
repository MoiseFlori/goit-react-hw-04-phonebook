import React from 'react';
import styles from './Phonebook.module.css';
import PropTypes from 'prop-types'

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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
export default Filter;


