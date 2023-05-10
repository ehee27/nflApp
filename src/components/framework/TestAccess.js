import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const TestAccess = () => {
  // const dispatch = useDispatch();
  const { auth } = useSelector(state => state.auth);
  console.log(auth.id);
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to="/">Home</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/test-access">Test Access</Link>
      </div>
      <h1>Test Access page</h1>
      {auth.accessToken ? (
        <p>Authorized</p>
      ) : (
        <p>You do not have authorization</p>
      )}
    </div>
  );
};

export default TestAccess;
