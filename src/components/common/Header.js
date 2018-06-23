import React from 'react';
import { NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';
import PropTypes from 'prop-types';

const Header = ({ loading }) => {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      {" | "}
      <NavLink to="/courses" activeClassName="active">Courses</NavLink>      
      {" | "}
      <NavLink to="/about" activeClassName="active">About</NavLink>
      { loading && <LoadingDots intrval={100} dots={20} /> }
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
