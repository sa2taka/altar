import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { teal, orange } from '@material-ui/core/colors';

export const primary = teal;
export const secondary = orange;

export const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: primary,
    secondary: secondary,
  },
});

export const light = createMuiTheme({
  palette: {
    type: 'light',
    primary: primary,
    secondary: secondary,
  },
});

export const white = createMuiTheme({
  palette: {
    primary: { main: '#fff' },
    secondary: { main: '#fff' },
  },
});
