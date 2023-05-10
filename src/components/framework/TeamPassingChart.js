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

const TeamPassingChart = ({ open, closePassing, avgPassTD }) => {
  const classes = useStyles();

  return (
    <>
      <Dialog open={open}>
        <Container className={classes.dialogContainer}>
          <LineChart chartData={avgPassTD} />
          <DialogActions>
            <Grid className={classes.dialogFooter}>
              <Button
                variant="contained"
                color="secondary"
                onClick={closePassing}
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

export default TeamPassingChart;
