import {
  Container,
  Typography,
  Grid,
  makeStyles,
  TextField,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTeam } from '../../store';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(237, 237, 237)',
    paddingBottom: 20,
    width: '100vw',
  },
  form: {
    marginTop: 10,
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'white',
  },
  topRow: {
    display: 'flex',
    marginTop: 10,
    borderTopLeftRadius: '.5rem',
  },
  name: {
    backgroundColor: 'rgb(58, 58, 58)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 100,
    textShadow: '3px 4px 5px rgb(0, 0, 0)',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow: 'inset 1px 2px 4px rgb(47, 47, 47)',
    borderEndEndRadius: '.5rem',
    borderTopRightRadius: '.5rem',
  },
  record: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  winLoss: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow: 'inset 1px 1px 3px 2px rgb(47, 47, 47)',
    borderRadius: '.25rem',
    color: 'rgb(54, 54, 54)',
    margin: 5,
    fontSize: 50,
    fontFamily: 'Orbitron, sans-serif',
    textShadow: 'none',
    width: '30%',
    height: '70%',
  },
  charts: {
    boxShadow: 'inset 1px 2px 4px rgb(47, 47, 47)',
    backgroundColor: 'white',
    borderRadius: '.25rem',
    marginTop: 27,
  },
  lineChart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
    boxShadow: 'inset 1px 2px 4px rgb(47, 47, 47)',
    borderRadius: '.25rem',
    marginTop: 30,
    marginBottom: 30,
  },
});

const TeamDetails = () => {
  //
  const classes = useStyles();
  //
  const dispatch = useDispatch();
  //
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchTeam(id));
  }, []);

  const team = useSelector(state => state.teams.team);

  // HIGH and LOW point totals
  const high = () => {
    if (team.seasonPoints) {
      let highScore = team.seasonPoints.sort().pop();
      console.log(typeof highScore);
      return Number(highScore);
    }
  };
  const low = () => {
    if (team.seasonPoints) {
      let lowScore = team.seasonPoints.sort().shift();
      return Number(lowScore);
    }
  };

  // TOTAL YARDS
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
  // TOTAL PASS YARDS
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
  // TOTAL RUSH YARDS
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
  // WEEKLY POINTS SCORED
  const weeklyPointsScored = {
    labels: team?.seasonPoints?.map((item, i) => `Week ${i + 1}`),
    datasets: [
      {
        label: `${team.name} points scored`,
        data: team?.seasonPoints?.map(item => item),
        fill: true,
        borderColor: `${team.primaryColor}`,
      },
    ],
  };

  return (
    <Container className={classes.container}>
      <div className={classes.form}>
        <form>
          <TextField
            className={classes.input}
            onChange={e => setSearch(e.target.value)}
            label="select year"
            variant="outlined"
            color="primary"
          ></TextField>
        </form>
      </div>
      <Grid
        className={classes.topRow}
        container
        spacing={2}
        style={{
          borderLeft: `solid 20pt ${team.primaryColor}`,
          borderRadius: '.25rem',
        }}
      >
        <Grid className={classes.name} item xs={12} sm={8} md={8}>
          <Typography variant="h2">{team.name}</Typography>

          <div className={classes.record}>
            <div className={classes.winLoss}>{team.wins}</div>
            <div className={classes.winLoss}>{team.losses}</div>
          </div>
        </Grid>
        <Grid className={classes.logo} item xs={12} sm={4} md={4}>
          <img
            height="250"
            width="250"
            align="center"
            src={`.././static/nflLogos/${team.logo}`}
          ></img>
        </Grid>
      </Grid>

      <Grid
        className={classes.charts}
        container
        spacing={3}
        justifyContent="center"
      >
        <Grid item xs={12} sm={4} md={4}>
          <BarChart chartData={totalYards} />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <BarChart chartData={passYards} />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <BarChart chartData={rushYards} />
        </Grid>
      </Grid>

      <Grid className={classes.lineChart} container spacing={1}>
        <Grid className={classes.chart} item xs={12} md={10}>
          <Typography variant="h5" align="center">
            Tracking points scored per week.
          </Typography>
          {team.seasonPoints ? (
            <div className="seasonPoints">
              <div className="chartLabel"></div>
              <div className="pointsChart">
                <LineChart chartData={weeklyPointsScored} />
              </div>
            </div>
          ) : (
            <span></span>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeamDetails;
