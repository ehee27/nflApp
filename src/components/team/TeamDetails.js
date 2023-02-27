import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTeam } from '../../store';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';

const TeamDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchTeam(id));
  }, []);

  const team = useSelector(state => state.teams.team);
  // console.log(team.seasonPoints);
  let totalTeamYds = team.avgYdsTotal;
  let totalTeamRushYds = team.avgYdsRush;
  let totalTeamPassYds = team.avgYdsPass;

  const totalYards = {
    labels: ['Total Yards', 'League Avg'],
    datasets: [
      {
        label: ['Total Yards'],
        data: [`${team.avgYdsTotal}`, 340.1],
        backgroundColor: [`${team.primaryColor}`, 'rgb(35, 35, 35)'],
      },
    ],
  };
  const passYards = {
    labels: ['Passing Yards', 'League Avg'],
    datasets: [
      {
        label: ['Passing Yards'],
        data: [`${team.avgYdsPass}`, 218.5],
        backgroundColor: [`${team.primaryColor}`, 'rgb(35, 35, 35)'],
      },
    ],
  };
  const rushYards = {
    labels: ['Rushing Yards', 'League Avg'],
    datasets: [
      {
        label: ['Rushing Yards'],
        data: [`${team.avgYdsRush}`, 121.8],
        backgroundColor: [`${team.primaryColor}`, 'rgb(35, 35, 35)'],
      },
    ],
  };

  const weeklyPointsScored = {
    labels: team?.seasonPoints?.map((item, i) => `Week ${i + 1}`),
    datasets: [
      {
        label: `${team.name} points scored`,
        data: team?.seasonPoints?.map(item => item),
        fill: true,
        backgroundColor: `${team.primaryColor}`,
        borderColor: 'rgb(36, 36, 36)',
      },
    ],
  };

  return (
    <div className="teamDetails">
      <div className="teamBanner">
        <div className="leftBanner">
          <div className="teamName">
            <p>{team.name}</p>
          </div>
          <div className="teamDivision">
            <h3>{team.divisionName}</h3>
          </div>

          <div className="lowerBanner">
            <div className="lowerLeft">{team.wins}</div>
            <div className="lowerRight">{team.losses}</div>
          </div>
        </div>

        <div className="rightBanner">
          <img src={`/static/nflLogos/${team.logo}`}></img>
        </div>
      </div>
      <div className="lowerHalf">
        <div className="chartLabelTop">
          <h3>Per Game averages</h3>
        </div>
        <div className="teamStats">
          <div className="chartColumn">
            <BarChart chartData={totalYards} />
          </div>
          <div className="chartColumn">
            <BarChart chartData={passYards} />
          </div>
          <div className="chartColumn">
            <BarChart chartData={rushYards} />
          </div>
        </div>

        {team.seasonPoints ? (
          <div className="seasonPoints">
            <div className="chartLabel">
              <h3>Tracking total point scored each week</h3>
            </div>
            <div className="pointsChart">
              <LineChart chartData={weeklyPointsScored} />
            </div>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default TeamDetails;
