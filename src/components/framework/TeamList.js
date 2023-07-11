// TeamGrid acts as our List comp - maps data (in this case pulled from Redux)
// no styling used as we're just mapping from Card comp.

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeams } from '../../store'
import TeamCard from './TeamCard'

import TeamScoringChart from './TeamScoringChart'
import TeamPassingChart from './TeamPassingChart'
import TeamRushingChart from './TeamRushingChart'
import { avgTeamScore, avgRushTD, avgPassTD } from '../../data/chartData'

import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  form: {
    paddingLeft: 45,
    marginBottom: 15,
    width: '100%',
    fontFamily: 'Orbitron, sans-serif',
  },
  search: {
    fontFamily: 'Orbitron, sans-serif',
    width: '28%',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
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
})

const TeamList = () => {
  //
  const classes = useStyles()
  //
  const { teams } = useSelector(state => state.teams)
  //
  const dispatch = useDispatch()
  //
  useEffect(() => {
    dispatch(fetchTeams())
  }, [])
  //
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const [openScoring, setOpenScoring] = useState(false)
  const [openPassing, setOpenPassing] = useState(false)
  const [openRushing, setOpenRushing] = useState(false)

  //
  useEffect(() => {
    const filteredTeams = teams.filter(team =>
      team.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
    setSearchResults(filteredTeams)
  }, [teams, search])

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
      <Grid className={classes.buttonRow} container spacing={1}>
        {/* ---------------------- */}
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
        {/* ---------------------- */}
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
        {/* ---------------------- */}
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
      </Grid>
      <Typography
        align="center"
        gutterBottom
        style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '30pt',
          textShadow: '3px 2px rgba(50, 50, 70, 0.25)',
        }}
      >
        Select A Team
      </Typography>
      <Grid className={classes.form}>
        <form>
          <TextField
            className={classes.search}
            onChange={e => setSearch(e.target.value)}
            label="search teams"
            variant="outlined"
            color="primary"
          ></TextField>
        </form>
      </Grid>

      <Grid container spacing={2}>
        {searchResults.map(team => {
          return (
            <Grid item key={team.id} xs={12} sm={12} md={4}>
              <TeamCard team={team} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default TeamList
