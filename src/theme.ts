import { createTheme } from '@material-ui/core/styles';

/**
 * Colorscheme
 *
 * Red - #d24c31
 * Gold - #cac06b
 * oWhite - #edecd8
 * Blue - #7ecfd9
 * Slate - #628486
 */

const theme = createTheme({
  palette: {
    primary: {
      main: '#7ecfd9',
    },
    secondary: {
      main: '#cac06b',
    },
    background: {
      default: '#628486'
    }
  },
});

export default theme;
