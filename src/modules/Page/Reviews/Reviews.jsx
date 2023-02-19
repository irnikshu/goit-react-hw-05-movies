import { fetchReviewsFilmToId } from '../../../shared/Api/themoviedb';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../../shared/Components/Loader/Loader';

import styles from './reviews.module.scss';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviewsMovie = async () => {
      setLoading(true);
      try {
        const { data } = await fetchReviewsFilmToId(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getReviewsMovie(movieId);
  }, [movieId]);

  const ReviewsList = reviews?.map(({ id, author, content }) => {
    return (
      <li key={id} className={styles.remiews}>
        <div>
          <h3 className={styles.author}>Author: {author}</h3>
          <p>{content}</p>
        </div>
      </li>
    );
  });

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      <ul className={styles.reviewsList}>{ReviewsList}</ul>
    </div>
  );
};

export default Reviews;
