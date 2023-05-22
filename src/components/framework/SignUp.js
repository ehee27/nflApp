import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNewUser } from '../../store';

import {
  Container,
  Button,
  Typography,
  Grid,
  makeStyles,
} from '@material-ui/core';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  container: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Orbitron, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const SignUp = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch(
      createNewUser({
        firstname: firstName,
        lastname: lastName,
        username: username,
        password: password,
      })
    );
    navigate('/login');
  };
  return (
    <Container className={classes.container}>
      <h1>Signup form</h1>
      <div className={classes.container}>
        <Grid item xs={12} sm={12} md={12}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              onChange={e => setFirstName(e.target.value)}
              label="First Name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={e => setLastName(e.target.value)}
              label="Last Name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={e => setUsername(e.target.value)}
              label="Username"
              margin="normal"
              variant="outlined"
            />
            <TextField
              onChange={e => setPassword(e.target.value)}
              label="Password"
              margin="normal"
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Grid>
      </div>
    </Container>
  );
};

export default SignUp;
