import { useEffect } from 'react';
import { useState } from 'react';

import { fetchTrendingFilms } from '../../../shared/Api/themoviedb';
import MovieList from '../../../modules/MovieList/MovieList';
import Loader from '../../../shared/Components/Loader/Loader';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTradingMovies = async () => {
      try {
        setLoading(true);
        const { data } = await fetchTrendingFilms();
        setItems(data.results);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getTradingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      <MovieList items={items} loading={loading} error={error} />
    </div>
  );
};

export default Home;
