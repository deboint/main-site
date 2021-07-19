import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

// TODO - is this 100vh applied across the board the best approach?
const useStyles = makeStyles((theme) => ({
  outerDiv: {
    height: '100vh',
  },
  gridContainer: {
    height: '100vh',
  },
  headline: {
    textAlign: 'center',
  },
  blurb: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
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
            <Typography variant="subtitle1" className={classes.blurb}>
              Solutions Engineered
            </Typography>
            <Typography variant="subtitle2" className={classes.headline}>
              <a href="https://github.com/deboint" className={classes.link}>
                <GitHubIcon />
              </a>
            </Typography>
            <Typography variant="subtitle2" className={classes.headline}>
              <a href="mailto:chuck@deboint.com" className={classes.link}>
                <MailOutlineIcon />
              </a>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default App;
