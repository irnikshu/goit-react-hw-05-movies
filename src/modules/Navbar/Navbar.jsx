import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './navbar.module.scss';
import items from './items';

const getFullName = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
};

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={getFullName} to={link}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={styles.menu}>{elements}</ul>;
};

export default Navbar;

getFullName.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
