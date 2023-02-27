import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser, logout } from '../../store';

const Nav = () => {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="nav">
      <div className="nav1"></div>
      <div className="navButtons">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/login">Sign in</Link>
          </li>
          <li>
            <Link to="/create-account">Sign up</Link>
          </li>
        </ul>
      </div>

      <div className="logout">
        {auth ? <button onClick={() => dispatch(logout())}>Logout</button> : ''}
      </div>
    </div>
  );
};

export default Nav;
