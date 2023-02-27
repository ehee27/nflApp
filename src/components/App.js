import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeams } from '../store';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './framework/Header';
import Footer from './framework/Footer';
import Nav from './framework/Nav';
import Home from './framework/Home';
import TeamList from './team/TeamList';
import TeamDetails from './team/TeamDetails';
import Login from './account/Login';
import { loginWithToken } from '../store';
import CreateAccount from './account/CreateAccount';
import NotFound from './framework/NotFound';

const App = () => {
  const { auth } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginWithToken());
  }, []);

  useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  return (
    <>
      <Router>
        <Header title="NFL STATISTICS" />
        <Nav auth={auth} />
        {auth.id ? (
          <div className="app">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/teams" element={<TeamList />} />
              <Route exact path="/teams/:id" element={<TeamDetails />} />
              <Route exact path="/create-account" element={<CreateAccount />} />
              <Route exact path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        ) : (
          <div className="app">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/teams" element={<TeamList />} />
              <Route exact path="/teams/:id" element={<TeamDetails />} />
              <Route exact path="/create-account" element={<CreateAccount />} />
              <Route exact path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        )}

        <Footer />
      </Router>
    </>
  );
};

export default App;
