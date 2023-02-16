import { useState } from 'react';
// import initialState from './InitialState';

import styles from './movieSearch.module.scss';

const MovieSearch = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    //   if (search.trim() === '') {
    //     return Notify.info('Будь ласка, введіть, що шукати!');
    //   }
    onSubmit(search);
    setSearch('');
  };
  //   const { search } = state;
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
