import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from '../../store';
import TeamCard from './TeamCard';
import { loginWithToken } from '../../store';
import { Link } from 'react-router-dom';

const TeamList = () => {
  const { teams } = useSelector(state => state.teams);
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  console.log(auth);

  useEffect(() => {
    dispatch(loginWithToken());
  }, []);

  useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  const afcWest = teams.filter(team => team.divisionName === 'AFC West');
  const afcEast = teams.filter(team => team.divisionName === 'AFC East');
  const afcNorth = teams.filter(team => team.divisionName === 'AFC North');
  const afcSouth = teams.filter(team => team.divisionName === 'AFC South');
  const nfcWest = teams.filter(team => team.divisionName === 'NFC West');
  const nfcEast = teams.filter(team => team.divisionName === 'NFC East');
  const nfcNorth = teams.filter(team => team.divisionName === 'NFC North');
  const nfcSouth = teams.filter(team => team.divisionName === 'NFC South');

  return (
    <>
      {auth ? (
        <div className="teamList">
          <div className="row">
            <div className="afcDivision">
              <div className="banner">
                <div className="conference">
                  <h3>AFC WEST</h3>
                </div>
                <div className="logo">
                  <img src={`/static/nflLogos/afc.png`}></img>
                </div>
              </div>
              {afcWest.map(team => {
                return (
                  <div className="teamCard" key={team.id}>
                    <TeamCard team={team} />
                  </div>
                );
              })}
            </div>
            <div className="nfcDivision">
              <div className="banner">
                <div className="conference">
                  <h3>NFC WEST</h3>
                </div>
                <div className="logo">
                  <img src={`/static/nflLogos/nfc.png`}></img>
                </div>
              </div>
              {nfcWest.map(team => {
                return (
                  <div className="teamCard" key={team.id}>
                    <TeamCard team={team} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row">
            <div className="afcDivision">
              <div className="banner">
                <div className="conference">
                  <h3>AFC EAST</h3>
                </div>
                <div className="logo">
                  <img src={`/static/nflLogos/afc.png`}></img>
                </div>
              </div>
              {afcEast.map(team => {
                return (
                  <div className="teamCard" key={team.id}>
                    <TeamCard team={team} />
                  </div>
                );
              })}
            </div>
            <div className="nfcDivision">
              <div className="banner">
                <div className="conference">
                  <h3>NFC EAST</h3>
                </div>
                <div className="logo">
                  <img src={`/static/nflLogos/nfc.png`}></img>
                </div>
              </div>
              {nfcEast.map(team => {
                return (
                  <div className="teamCard" key={team.id}>
                    <TeamCard team={team} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row">
            <div className="afcDivision">
              <div className="banner">
                <div className="conference">
                  <h3>AFC NORTH</h3>
                </div>
                <div className="logo">
                  <img src={`/static/nflLogos/afc.png`}></img>
                </div>
              </div>
              {afcNorth.map(team => {
                return (
                  <div className="teamCard" key={team.id}>
                    <TeamCard team={team} />
                  </div>
                );
              })}
            </div>
            <div className="nfcDivision">
              <div className="banner">
                <div className="conference">
                  <h3>NFC NORTH</h3>
                </div>
                <div className="logo">
                  <img src={`/static/nflLogos/nfc.png`}></img>
                </div>
              </div>
              {nfcNorth.map(team => {
                return (
                  <div className="teamCard" key={team.id}>
                    <TeamCard team={team} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row">
            <div className="afcDivision">
              <div className="banner">
                <div className="conference">
                  <h3>AFC SOUTH</h3>
                </div>
                <div className="logo">
                  <img src={`/static/nflLogos/afc.png`}></img>
                </div>
              </div>
              {afcSouth.map(team => {
                return (
                  <div className="teamCard" key={team.id}>
                    <TeamCard team={team} />
                  </div>
                );
              })}
            </div>
            <div className="nfcDivision">
              <div className="banner">
                <div className="conference">
                  <h3>NFC SOUTH</h3>
                </div>
                <div className="logo">
                  <img src={`/static/nflLogos/nfc.png`}></img>
                </div>
              </div>
              {nfcSouth.map(team => {
                return (
                  <div className="teamCard" key={team.id}>
                    <TeamCard team={team} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>You do not have permission to view this content.</p>
          <p>
            Please <Link to="/login">sign-in</Link> or{' '}
            <Link to="/create-account">create an account</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default TeamList;
