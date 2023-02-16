import MovieSearch from '../../../modules/MovieSearch/MovieSearch';
import { fetchSearchFilms } from '../../../shared/Api/themoviedb';
import { useState, useEffect } from 'react';
import Loader from '../../../shared/Components/Loader/Loader';
import MovieList from '../../../modules/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getSearchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await fetchSearchFilms(search);
        setItems(data.results);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      getSearchMovies();
    }
  }, [search]);

  const changeSearch = search => {
    setSearchParams({ search });
  };

  return (
    <>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      <MovieSearch onSubmit={changeSearch} />
      {items.length > 0 && <MovieList items={items} />}
    </>
  );
};

export default Movies;
