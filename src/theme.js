import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00BFFF', // Deep Sky Blue
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#BDBDBD',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
      borderBottom: '2px solid #00BFFF',
      paddingBottom: '0.5rem',
      display: 'inline-block',
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
  },
});

export default theme;