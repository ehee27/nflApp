import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store';

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
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const SignIn = () => {
  const navigate = useNavigate();
  const { auth } = useSelector(state => state.auth);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch(
      login({
        username: username,
        password: password,
      })
    );
    navigate('/');
  };
  return (
    <Container className={classes.container}>
      <h1>Login form</h1>

      <Grid item xs={12} sm={12} md={12}>
        <form className={classes.form} onSubmit={handleSubmit}>
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
    </Container>
  );
};

export default SignIn;
