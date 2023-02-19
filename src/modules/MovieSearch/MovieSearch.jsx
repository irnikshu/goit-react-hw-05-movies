import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './movieSearch.module.scss';

const MovieSearch = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(search);
    setSearch('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="Search movies"
          onChange={handleChange}
          name="search"
        />
        <button type="submit" className={styles.button} onClick={handleSubmit}>
          <span className={styles.buttonLabel}>Search</span>
        </button>
      </form>
    </>
  );
};

export default MovieSearch;

MovieSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
