// we've set the layout so it wraps all our routes
// we map through the list items array so not to bloat our code
// array item attributes = 1. text 2. icon (optional) 3. path
// each attribute is it's own component insert </> (see below)
// set the 'button' attribute for clickable
// useNavigate from 'r-r-dom' - set the 'navigate' variable - call path with onClick
// set active class on nav - useLocation from 'r-r-dom' - set styles - className will use ternary to check if 'location.pathname' == the item path - sets 'classes.active'
// AppBar & ToolBar - AppBar simply acts as the container -

import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Typography,
  makeStyles,
  AppBar,
  Toolbar,
  Container,
  Grid,
} from '@material-ui/core'
import Navbar from './Navbar'
import { format } from 'date-fns'

const useStyles = makeStyles(theme => {
  return {
    container: {
      display: 'flex',
      border: '2pt solid green',
    },
    page: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 150,
      // background: 'white',
    },
    appbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // backgroundColor: theme.primary,
    },
    title: {
      fontSize: '27pt',
      color: 'white',
    },
  }
})

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    // <Container className={classes.container}>
    <Container className="navBackground">
      <AppBar className={classes.appbar} elevation={1}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            NFL STATISITCS
          </Typography>
        </Toolbar>

        <Navbar />
      </AppBar>

      <Grid className={classes.page}>
        <Grid className={classes.toolbar}>{children}</Grid>
      </Grid>
    </Container>
  )
}

export default Layout
