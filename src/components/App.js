import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';

const App = () => {
  return (
    <>
      <Router>
        <Header title="NFL STATS" />
        <Nav />
        <Home />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} title="This is home" />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
