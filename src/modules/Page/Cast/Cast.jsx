import { fetchCastFilmToId } from '../../../shared/Api/themoviedb';
import { useState, useEffect } from 'react';
import Loader from '../../../shared/Components/Loader/Loader';
import { useParams } from 'react-router-dom';

import styles from './cast.module.scss';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getCastMovie = async () => {
      setLoading(true);
      try {
        const { data } = await fetchCastFilmToId(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getCastMovie(movieId);
  }, [movieId]);

  const CastList = cast?.map(({ cast_id, name, character, profile_path }) => {
    return (
      <li key={cast_id} className={styles.castItem}>
        <div>
          <img
            src={
              profile_path === null
                ? 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                : `https://image.tmdb.org/t/p/w500${profile_path}`
            }
            alt=""
            className={styles.castActorImage}
          />
        </div>
        <div className={styles.castActorInfo}>
          <div className={styles.castActorName}>{name}</div>
          <div className={styles.castActorCharacter}>
            Character: {character}
          </div>
        </div>
      </li>
    );
  });
  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      <ul className={styles.castList}>{CastList}</ul>
    </div>
  );
};

export default Cast;
