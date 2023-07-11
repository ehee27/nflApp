// All we focused on here is clean layout and margins. Use of basic 'Containers', 'Grid' and 'Grid item' does the job nicely. Also placed 3 basic buttons that link to our offensive chart data. Minimal styling as possible. Grid takes care of layout. Rest comes later

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TeamScoringChart from './TeamScoringChart'
import TeamPassingChart from './TeamPassingChart'
import TeamRushingChart from './TeamRushingChart'
import { avgTeamScore, avgRushTD, avgPassTD } from '../../data/chartData'
import {
  Button,
  Container,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core'
import { logout } from '../../store'

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
      marginTop: 20,
      marginBottom: 20,
      padding: 20,
      backgroundColor: 'rgb(249, 249, 249)',
      boxShadow: '1px 2px 2px rgb(216, 216, 216)',
      borderRadius: '.5rem',
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logos: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

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
    chartButton: {
      fontSize: '12pt',
      fontFamily: 'Orbitron, sans-serif',
      backgroundColor: 'rgb(88, 88, 88)',
      border: '2pt solid rgb(38, 255, 38)',
      minWidth: '100%',
      borderRadius: '.25rem',
      color: 'white',
      padding: '10px',
      '&:hover': {
        color: 'gray',
      },
    },
  }
})

const Home = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state)

  const [openScoring, setOpenScoring] = useState(false)
  const [openPassing, setOpenPassing] = useState(false)
  const [openRushing, setOpenRushing] = useState(false)

  const displayScoring = () => {
    setOpenScoring(true)
  }
  const closeScoring = () => {
    setOpenScoring(false)
  }
  const displayPassing = () => {
    setOpenPassing(true)
  }
  const closePassing = () => {
    setOpenPassing(false)
  }
  const displayRushing = () => {
    setOpenRushing(true)
  }
  const closeRushing = () => {
    setOpenRushing(false)
  }

  return (
    <Container className={classes.container}>
      <Typography
        // className={classes.home}
        align="center"
        style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '30pt',
          textShadow: '3px 2px rgba(50, 50, 70, 0.25)',
        }}
      >
        Defense does not win Championships
      </Typography>
      <hr></hr>
      <Typography
        align="center"
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: '14pt',
          color: 'gray',
          marginTop: '20px',
        }}
      >
        Over the last 20 years, the league has seen a significant rise in
        scoring and offensive-minded team construction. Organizations are now
        focused on building their teams around dynamic players who can get the
        ball in the endzone quickly and consistently.
      </Typography>
      <Typography
        align="center"
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: '14pt',
          marginTop: '15px',
          color: 'gray',
        }}
      >
        This app provides offensive output over the last 20 years. The Charts
        convey that the game is shifting to higher points totals and more
        touchdowns, both through the air and on the ground.
      </Typography>

      <Grid
        className={classes.logos}
        container
        spacing={4}
        style={{ marginTop: '40px' }}
      >
        <Grid className={classes.logo} item xs={12} sm={5} md={5}>
          <img
            src={`.././static/nflLogos/afc.png`}
            height="250"
            width="300"
            style={{
              boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)',
              padding: '20px',
              borderRadius: '.3rem',
              outline: 'none',
            }}
          ></img>
        </Grid>
        <Grid className={classes.logo} item xs={12} sm={5} md={5}>
          <img
            src={`.././static/nflLogos/nfc.png`}
            height="250"
            width="300"
            style={{
              boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)',
              padding: '20px',
              borderRadius: '.3rem',
            }}
          ></img>
        </Grid>
      </Grid>
      {/* <Grid>
        <Typography
          align="center"
          style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '18pt',
            marginTop: '15px',
            color: 'gray',
          }}
        >
          Let's first take a look at league-wide team offensive stats from last
          season.
        </Typography>
      </Grid> */}

      {/* <Grid className={classes.buttonRow} container spacing={1}>
        <Grid className={classes.button} item xs={12} sm={3} md={3}>
          <Button className={classes.chartButton} onClick={displayScoring}>
            Team Scoring
          </Button>

          <TeamScoringChart
            open={openScoring}
            closeScoring={closeScoring}
            avgTeamScore={avgTeamScore}
          />
        </Grid>

        <Grid className={classes.button} item xs={12} sm={3} md={3}>
          <Button className={classes.chartButton} onClick={displayPassing}>
            Passing TDs
          </Button>
          <TeamPassingChart
            open={openPassing}
            closePassing={closePassing}
            avgPassTD={avgPassTD}
          />
        </Grid>

        <Grid className={classes.button} item xs={12} sm={3} md={3}>
          <Button className={classes.chartButton} onClick={displayRushing}>
            Rushing TDs
          </Button>
          <TeamRushingChart
            open={openRushing}
            closeRushing={closeRushing}
            avgRushTD={avgRushTD}
          />
        </Grid>
      </Grid> */}
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
  )
}

export default Home
