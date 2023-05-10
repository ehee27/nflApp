// All we focused on here is clean layout and margins. Use of basic 'Containers', 'Grid' and 'Grid item' does the job nicely. Also placed 3 basic buttons that link to our offensive chart data. Minimal styling as possible. Grid takes care of layout. Rest comes later

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamScoringChart from './TeamScoringChart';
import TeamPassingChart from './TeamPassingChart';
import TeamRushingChart from './TeamRushingChart';
import { avgTeamScore, avgRushTD, avgPassTD } from '../../data/chartData';
import {
  Button,
  Container,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core';
import { logout } from '../../store';

const useStyles = makeStyles(theme => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      width: '100%',
    },
    home: {
      fontSize: '12pt',
      lineHeight: '2rem',
      padding: 33,
    },
    buttonRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      padding: 20,
      backgroundColor: 'rgb(249, 249, 249)',
      boxShadow: '1px 2px 2px rgb(216, 216, 216)',
      borderRadius: '.5rem',
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '30pt',
      backgroundColor: theme.alternate,
    },
    dialogContainer: {},
    dialogFooter: {},
    logos: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1pt solid rgb(216, 216, 216)',
      borderRadius: '.5rem',
    },
    teamLogos: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    teamLogo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // border: '1pt solid rgb(216, 216, 216)',
      // borderRadius: '.5rem',
    },
  };
});

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state.auth);
  const ID = auth.id;
  console.log('can I see your ID?...');

  // const handleLogout = () => {
  //   dispatch(logout);
  // };

  const [hoverColor, setHoverColor] = useState(false);

  // const handleMouseEnter = () => {
  //   setHoverColor(true);
  // };
  // const handleMouseLeave = () => {
  //   setHoverColor(false);
  // };

  // const hoverStyle = {
  //   backgroundColor: hoverColor ? 'rgb(205, 205, 205)' : `white`,
  //   // border: hoverColor ? '2pt solid red' : 'white',
  //   borderRadius: hoverColor ? '.25rem' : '',
  //   // padding: 1,
  // };

  const [openScoring, setOpenScoring] = useState(false);
  const [openPassing, setOpenPassing] = useState(false);
  const [openRushing, setOpenRushing] = useState(false);

  const displayScoring = () => {
    setOpenScoring(true);
  };
  const closeScoring = () => {
    setOpenScoring(false);
  };
  const displayPassing = () => {
    setOpenPassing(true);
  };
  const closePassing = () => {
    setOpenPassing(false);
  };
  const displayRushing = () => {
    setOpenRushing(true);
  };
  const closeRushing = () => {
    setOpenRushing(false);
  };

  return (
    <Container className={classes.container}>
      {/* {auth ? (
        <span>YOU ARE AUTHORIZED</span>
      ) : (
        <span>YOU ARE NOT AUTHORIZED!!!</span>
      )} */}
      {/* <Typography variant="h2" component="h1" align="center" gutterBottom>
        Welcome
      </Typography>
      <Button onClick={handleLogout} variant="contained">
        Log out
      </Button>
      <Button
        onClick={() => console.log('here you go...', ID)}
        variant="contained"
      >
        Log Access
      </Button> */}
      <Typography className={classes.home} align="center">
        Defense does not win championships. Over the last 20 years, the league
        has seen a significant rise in scoring and offensive-minded team
        construction. Organizations are now focused on building their teams
        around dynamic players who can get the ball in the endzone quickly and
        consistently. A stout defense is still important but if you can't score
        at will, your chances of making a deep postseason run are lower than
        they've ever been. This app provides offensive output over the last 20
        years. The Charts convey that the game is shifting to higher points
        totals and more touchdowns, both through the air and on the ground.
      </Typography>

      <Grid className={classes.logos} container spacing={4}>
        <Grid className={classes.logo} item xs={12} sm={5} md={5}>
          <img
            src={`.././static/nflLogos/afc.png`}
            height="150"
            width="200"
          ></img>
        </Grid>
        <Grid className={classes.logo} item xs={12} sm={5} md={5}>
          <img
            src={`.././static/nflLogos/nfc.png`}
            height="150"
            width="200"
          ></img>
        </Grid>
      </Grid>
      <Grid>
        <Typography paragraph align="center">
          Let's first take a look at league-wide team offensive stats from last
          season.
        </Typography>
      </Grid>

      <Grid className={classes.buttonRow} container spacing={1}>
        {/* ---------------------- */}
        <Grid className={classes.button} item xs={12} sm={3} md={3}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={displayScoring}
          >
            Team Scoring
          </Button>
          <TeamScoringChart
            open={openScoring}
            closeScoring={closeScoring}
            avgTeamScore={avgTeamScore}
          />
        </Grid>
        {/* ---------------------- */}
        <Grid className={classes.button} item xs={12} sm={3} md={3}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={displayPassing}
          >
            Passing TDs
          </Button>
          <TeamPassingChart
            open={openPassing}
            closePassing={closePassing}
            avgPassTD={avgPassTD}
          />
        </Grid>
        {/* ---------------------- */}
        <Grid className={classes.button} item xs={12} sm={3} md={3}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={displayRushing}
          >
            Rushing TDs
          </Button>
          <TeamRushingChart
            open={openRushing}
            closeRushing={closeRushing}
            avgRushTD={avgRushTD}
          />
        </Grid>
      </Grid>
      <Grid className={classes.teamLogos} container spacing={2}>
        <Grid className={classes.teamLogo} item xs={12} sm={4} md={2}>
          <img
            src={`.././static/nflLogos/saints.webp`}
            height="120"
            width="160"
          ></img>
        </Grid>
        <Grid className={classes.teamLogo} item xs={12} sm={4} md={2}>
          <img
            src={`.././static/nflLogos/ravens.webp`}
            height="120"
            width="160"
          ></img>
        </Grid>
        <Grid className={classes.teamLogo} item xs={12} sm={4} md={2}>
          <img
            src={`.././static/nflLogos/chiefs.webp`}
            height="120"
            width="160"
          ></img>
        </Grid>
        <Grid className={classes.teamLogo} item xs={12} sm={4} md={2}>
          <img
            src={`.././static/nflLogos/packers.webp`}
            height="120"
            width="160"
          ></img>
        </Grid>
        <Grid className={classes.teamLogo} item xs={12} sm={4} md={2}>
          <img
            src={`.././static/nflLogos/jaguars.webp`}
            height="120"
            width="160"
          ></img>
        </Grid>
        <Grid className={classes.teamLogo} item xs={12} sm={4} md={2}>
          <img
            src={`.././static/nflLogos/vikings.webp`}
            height="120"
            width="160"
          ></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
