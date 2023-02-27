import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = ({ team }) => {
  return (
    <>
      <div className="cardDetails">
        <Link to={`/teams/${team.id}`}>
          <h2>{team.name}</h2>
        </Link>
      </div>
    </>
  );
};

export default TeamCard;
