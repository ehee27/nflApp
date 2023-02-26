import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/divisions">Divisions</Link>
    </div>
  );
};

export default Nav;
