import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00BFFF', // Deep Sky Blue (keep as brand color)
      light: '#33CCFF',
      dark: '#0080FF',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9C27B0', // Purple accent
      light: '#BA68C8',
      dark: '#7B1FA2',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a0a0a', // Darker background
      paper: '#1a1a1a',   // Slightly lighter for cards
      glass: 'rgba(26, 26, 26, 0.8)', // Glassmorphism background
    },
    text: {
      primary: '#F0F0F0',
      secondary: '#A0A0A0',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.08)',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Outfit", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(45deg, #00BFFF 30%, #9C27B0 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: '#B0B0B0',
    },
    button: {
      textTransform: 'none', // Remove uppercase default
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px', // Pill shape
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 14px 0 rgba(0, 191, 255, 0.39)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #00BFFF 30%, #0080FF 90%)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove default material gradient
        },
      },
    },
  },
});

export default theme;