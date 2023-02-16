// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loader from '../../shared/Components/Loader/Loader';

const MovieList = ({ items, loading, error }) => {
  const elements = items.map(({ id, title, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title || name}</Link>
    </li>
  ));

  return (
    <div>
      <ul>{elements}</ul>
      {loading && <Loader />}
      {error && <p>...Movie load failed</p>}
    </div>
  );
};

export default MovieList;

MovieList.defaultPorps = {
  items: [],
};
