import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFilmsById } from '../../../shared/Api/themoviedb';
import Loader from '../../../shared/Components/Loader/Loader';

import styles from './movieDetails.module.scss';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

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

  const goBack = () => navigate(from);

  return (
    <>
      <button onClick={goBack}>⇽ Go back</button>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      <div className={styles.filmInfo}>
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
          <h2 className={styles.titleFilm}>{title}</h2>
          <h3 className={styles.titleOverwiev}>Overwiev</h3>
          <p className={styles.overview}>{overview}</p>
          <h4 className={styles.titleGenres}>Genres</h4>
          <p className={styles.ganresList}> {ganresList}</p>
        </div>
      </div>
      <div className={styles.addInfo}>
        <h3 className={styles.titleAddinfo}>Additional information</h3>
        <ul className={styles.addInfoDit}>
          <Link state={{ from }} to={`cast`}>
            Cast
          </Link>

          <Link state={{ from }} to={`reviews`}>
            Reviews
          </Link>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
