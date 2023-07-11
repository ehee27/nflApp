import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../store'

import {
  Container,
  Button,
  Typography,
  Grid,
  makeStyles,
} from '@material-ui/core'
import TextField from '@mui/material/TextField'

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
})

const LogIn = () => {
  const navigate = useNavigate()
  // const { auth } = useSelector(state => state.auth)
  const classes = useStyles()
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameChange = e => setUsername(e.target.value)
  const passwordChange = e => setPassword(e.target.value)

  const handleSubmit = () => {
    console.log("this is what we're logging in with...", username, password)
    dispatch(
      login({
        username,
        password,
      })
    )
    navigate('/')
  }
  return (
    <Container className={classes.container}>
      <h1>Sign In</h1>

      <Grid item xs={12} sm={12} md={12}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            type="text"
            id="username"
            value={username}
            placeholder="username"
            onChange={usernameChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            type="password"
            id="password"
            value={password}
            placeholder="password"
            onChange={passwordChange}
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Grid>
    </Container>
  )
}

export default LogIn
