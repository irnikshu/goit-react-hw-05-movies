import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilmsById } from '../../../shared/Api/themoviedb';
import Loader from '../../../shared/Components/Loader/Loader';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getTrandingMovie = async () => {
      setLoading(true);

      try {
        const { data } = await fetchFilmsById(movieId);
        setMovies(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getTrandingMovie(movieId);
  }, [movieId]);

  const { poster_path, title, overview, genres } = movies;
  const ganresList = genres?.map(ganre => ganre.name).join(', ');

  return (
    <>
      <button>⇽ Go back</button>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      <div>
        <img
          src={
            poster_path === undefined
              ? 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
              : `https://image.tmdb.org/t/p/w500${poster_path}`
          }
          alt=""
          width="240"
        ></img>
      </div>
      <div>
        <h2>{title}</h2>
        <h3>Overwiev</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {ganresList}
      </div>
      <div>
        <p>Additional information</p>
        <div>
          <p>Cast</p>
          <p>Reviews</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
