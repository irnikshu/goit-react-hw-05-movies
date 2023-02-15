// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Loader from '../../shared/Components/Loader/Loader';

const MovieList = ({ items, loading, error }) => {
  const location = useLocation();
  const elements = items.map(({ id, title, name }) => (
    <li key={id}>
      <Link state={{ from: location }} to={'/movies/${id}'}>
        {title || name}
      </Link>
    </li>
    // <Link key={id} to={'/movie/${id}'} state={{ from: location }}>
    //   <li>{title || name}</li>
    // </Link>
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
