import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  navContainer: {
    // backgroundColor: 'white',
    width: '100vw',
  },
  links: {
    paddingTop: 15,
    paddingBottom: 15,
    display: 'flex',
    justifyContent: 'space-around',
  },
  link: {
    display: 'inline-block',
    position: 'relative',
    color: 'white',
    padding: 7,
    textDecoration: 'none',
    borderBottom: '2pt solid rgba(255, 255, 255, 0)',
    transition: 'border-bottom 300ms',
    fontFamily: 'Orbitron, sans-serif',
    marginBottom: 5,
    '&:hover': {
      borderBottom: '2pt solid #37fe00',
      paddingTop: 7,
    },
  },
})

const Navbar = () => {
  const classes = useStyles()
  return (
    <>
      <Container className={classes.navContainer}>
        <Grid className={classes.links} container spacing={2}>
          <Link className={classes.link} to="/">
            Home
          </Link>
          <Link className={classes.link} to="/teams">
            Teams
          </Link>
          {/* <Link className={classes.link} to="/register">
            Register
          </Link>
          <Link className={classes.link} to="/signin">
            Sign In
          </Link> */}
        </Grid>
      </Container>
    </>
  )
}

export default Navbar
