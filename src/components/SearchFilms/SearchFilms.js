import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styles from './SearchFilms.module.css';

export default function SearchBar({ onSubmit }) {
  const [name, setName] = useState('');

  const handleChange = event => {
    setName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '') {
      toast.info('Please enter your query!');
      return;
    }

    onSubmit(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        autoComplete="off"
        autoFocus
        placeholder="Enter movie name"
        onChange={handleChange}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
