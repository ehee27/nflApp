// kept it clean with 'Card' and 'CardHeader' - populated with name, divisionName and logo. Pushed logo to the opposite end by using 'flex'
// previous versions used traditional format (Header, Content, Media)
// hoverColor 1. set state var. 'hoverColor' 2. handler funcs.for scroll actions 'handleMouseEnter/Leave' 3.  style att. is set to a var. a ternary that actually changes the color

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, makeStyles, Container } from '@material-ui/core';
{
  /* ////////////////////////// STYLES ///////////////////////////// */
}

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
    color: 'white',
    transition: 'boackground-color 300ms',
  },
  names: {},
  logo: {
    height: '100px',
  },
  link: {
    textDecoration: 'none',
  },
});

const TeamCard = ({ team }) => {
  const classes = useStyles();

  const [hoverColor, setHoverColor] = useState(false);

  const handleMouseEnter = () => {
    setHoverColor(true);
  };
  const handleMouseLeave = () => {
    setHoverColor(false);
  };

  const hoverStyle = {
    backgroundColor: hoverColor ? 'rgb(205, 205, 205)' : `${team.primaryColor}`,
  };

  return (
    <>
      <Container>
        <Link to={`/teams/${team.id}`} className={classes.link}>
          <Card
            className={classes.card}
            elevation={3}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={hoverStyle}
          >
            <CardHeader
              className={classes.names}
              title={team.name}
              subheader={team.divisionName}
              action={
                <img
                  className={classes.logo}
                  src={`.././static/nflLogos/${team.logo}`}
                ></img>
              }
            />
          </Card>
        </Link>
      </Container>
    </>
  );
};

export default TeamCard;
