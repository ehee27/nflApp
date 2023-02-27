import React, { useState } from 'react';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import { useSelector } from 'react-redux';
import { avgTeamScore, avgRushTD, avgPassTD } from '../../../data/chartData';

const Home = () => {
  const { auth } = useSelector(state => state);
  console.log(auth);
  const [teamScore, setTeamScore] = useState('Off');
  const toggleTeamScore = () => {
    setTeamScore(!teamScore);
  };
  const [rushTDs, setRushTDs] = useState('Off');
  const toggleRushTDs = () => {
    setRushTDs(!rushTDs);
  };
  const [passTDs, setPassTDs] = useState('Off');
  const togglePassTDs = () => {
    setPassTDs(!passTDs);
  };

  return (
    <div className="home">
      <div className="homeBanner">
        <h3>
          <p>
            One of footballs oldest mantras is no longer the story of the NFL.
            Defense does not win championships. Over the last 20 years, the
            league has seen a significant rise in scoring, and offensive-minded
            team construction. Organizations are now focused on building their
            teams around dynamic players who can get the ball in the endzone as
            much as possible. A stout defense is still important, but if you
            can't score at will, your chances of making a deep postseason run
            are lower than they've ever been.
          </p>
          <br></br>
          <p>
            This app will examine offensive output over the last 20 years.
            Through our charts we can see that the game is shifting to higher
            points totals, and more touchdowns both through the air and on the
            ground.{' '}
          </p>
        </h3>
      </div>
      <div className="homePrompt">
        Click the buttons to view per game scoring trends
      </div>

      <div className="selectStats">
        <div className="buttonColumn">
          <button onClick={toggleTeamScore}>Team Scoring</button>
        </div>
        <div className="buttonColumn">
          <button onClick={togglePassTDs}>Passing TDs</button>
        </div>
        <div className="buttonColumn">
          <button onClick={toggleRushTDs}>Rushing TDs</button>
        </div>
      </div>

      <div className="chartRow">
        <div className={teamScore ? 'Off' : 'On'}>
          <button onClick={toggleTeamScore}>x</button>
          <div>
            <LineChart chartData={avgTeamScore} />
          </div>
        </div>
        <div className={passTDs ? 'Off' : 'On'}>
          <button onClick={togglePassTDs}>X</button>
          <div>
            <LineChart chartData={avgPassTD} />
          </div>
        </div>
        <div className={rushTDs ? 'Off' : 'On'}>
          <button onClick={toggleRushTDs}>X</button>
          <div>
            <LineChart chartData={avgRushTD} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
