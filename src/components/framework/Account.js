import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Account = () => {
  const { auth } = useSelector(state => state);
  console.log(auth);
  const { id } = useParams();
  return (
    <div>
      <h1>Account Page</h1>
    </div>
  );
};

export default Account;
