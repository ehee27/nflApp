import React from 'react';
import LineChart from '../charts/LineChart';
import {
  Button,
  Container,
  makeStyles,
  Grid,
  Dialog,
  DialogActions,
} from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    dialogContainer: {
      width: 600,
      padding: 10,
      // borderBottom: '3pt solid #37fe00',
    },
    dialogFooter: {},
  };
});

const TeamScoringChart = ({ open, closeScoring, avgTeamScore }) => {
  const classes = useStyles();

  return (
    <>
      <Dialog open={open}>
        <Container className={classes.dialogContainer}>
          <LineChart chartData={avgTeamScore} />
          <DialogActions>
            <Grid className={classes.dialogFooter}>
              <Button
                variant="contained"
                color="secondary"
                onClick={closeScoring}
              >
                Close
              </Button>
            </Grid>
          </DialogActions>
        </Container>
      </Dialog>
    </>
  );
};

export default TeamScoringChart;
