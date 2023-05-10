// TeamGrid acts as our List comp - maps data (in this case pulled from Redux)
// no styling used as we're just mapping from Card comp.

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from '../../store';
import TeamCard from './TeamCard';
import { Container, Typography, Grid, TextField } from '@material-ui/core';

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
  },
});

const TeamList = () => {
  //
  const classes = useStyles();
  //
  const { teams } = useSelector(state => state.teams);
  //
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(fetchTeams());
  }, []);
  //
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  //
  useEffect(() => {
    const filteredTeams = teams.filter(team =>
      team.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setSearchResults(filteredTeams);
  }, [teams, search]);

  return (
    <Container className={classes.container}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Select A Team
      </Typography>
      <Grid className={classes.form}>
        <form>
          <TextField
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
          );
        })}
      </Grid>
    </Container>
  );
};

export default TeamList;
