import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNewUser } from '../../store'

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

const Register = () => {
  const navigate = useNavigate()
  const classes = useStyles()
  const dispatch = useDispatch()
  const userRef = useRef()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)

  const usernameChange = e => setUsername(e.target.value)
  const passwordChange = e => setPassword(e.target.value)

  const handleSubmit = () => {
    dispatch(
      createNewUser({
        username,
        password,
      })
    )
    navigate('/signin')
  }

  useEffect(() => {
    userRef.current.focus()
  }, [])

  return (
    <Container className={classes.container}>
      <h1>Create your account</h1>
      <div className={classes.container}>
        <Grid item xs={12} sm={12} md={12}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              type="text"
              id="username"
              value={username}
              placeholder="username"
              required
              ref={userRef}
              onChange={usernameChange}
            />
            <TextField
              type="password"
              id="password"
              value={password}
              placeholder="password"
              onChange={passwordChange}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Grid>
      </div>
    </Container>
  )
}

export default Register
