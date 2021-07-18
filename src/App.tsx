import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// TODO - is this 100vh applied across the board the best approach?
const useStyles = makeStyles((_theme) => ({
  outerDiv: {
    height: '100vh',
  },
  gridContainer: {
    height: '100vh',
  },
  headline: {
    textAlign: 'center',
  },
}));

/**
 * Colorscheme
 *
 * Red - #d24c31
 * Gold - #cac06b
 * oWhite - #edecd8
 * Blue - #7ecfd9
 * Slate - #628486
 */

const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.outerDiv}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.gridContainer}
        >
          <Grid item xs={12}>
            <Typography variant="h1" className={classes.headline}>
              deboint
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default App;
