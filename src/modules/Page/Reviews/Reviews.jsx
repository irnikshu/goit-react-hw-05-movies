import { fetchReviewsFilmToId } from '../../../shared/Api/themoviedb';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../../shared/Components/Loader/Loader';

// import styles from './reviews.module.scss';

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
        setReviews(data.cast);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getReviewsMovie(movieId);
  }, [movieId]);

  const ReviewsList = reviews?.map(({ id, author, content }) => {
    console.log(reviews);
    return (
      <li key={id}>
        <div>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </div>
      </li>
    );
  });

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error.massage}</p>}
      <ul>{ReviewsList}</ul>
    </div>
  );
};

export default Reviews;
