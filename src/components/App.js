import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTeams } from '../store'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Framework/Home'
import TeamList from './Framework/TeamList'
import TeamDetails from './Framework/TeamDetails'
import Layout from './Framework/Layout'
import { createTheme, ThemeProvider } from '@material-ui/core'
import ImageUpload from './Framework/ImageUpload'
import Register from './Framework/Register'
import LogIn from './Framework/LogIn'
import TestAccess from './Framework/TestAccess'
import Account from './Framework/Account'

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#bdbdbd',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif;',
    h1: {
      fontFamily: 'Orbitron, sans-serif',
    },
    h2: {
      fontFamily: 'Orbitron, sans-serif',
    },
    h4: {
      fontFamily: 'Orbitron, sans-serif',
    },
    h5: {
      fontFamily: 'Orbitron, sans-serif',
    },
    body1: {
      color: '#424242',
    },
    body2: {
      color: 'white',
    },
  },
})

const App = () => {
  const { auth } = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTeams())
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/teams" element={<TeamList />} />
              {/* <Route exact path="/register" element={<Register />} /> */}
              {/* <Route exact path="/signin" element={<LogIn />} /> */}
              <Route exact path="/test-access" element={<TestAccess />} />
              <Route exact path="/teams/:id" element={<TeamDetails />} />
              <Route exact path="/users/:id" element={<Account />} />
              <Route exact path="/image-upload" element={<ImageUpload />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
