import React from 'react';

const Row = ({ team1, team2 }) => {
  return (
    <div className="row">
      <div className="division">
        <ul>
          {team1.map(team => {
            return <li key={team.id}>{team.name}</li>;
          })}
        </ul>
      </div>
      <div className="division">
        <ul>
          {team2.map(team => {
            return <li key={team.id}>{team.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Row;
