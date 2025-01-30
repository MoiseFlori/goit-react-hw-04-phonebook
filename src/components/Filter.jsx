import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;

    return (
      <input
        type="text"
        className={styles.input}
        value={filter}
        onChange={onFilterChange}
        placeholder="Find contact by name ..."
      />
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
