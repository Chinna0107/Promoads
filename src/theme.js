import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1E90FF',
      light: '#4FA8FF',
      dark: '#0066CC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF8C0A',
      light: '#FFA940',
      dark: '#CC7008',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.8rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.2rem',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(30, 144, 255, 0.1)',
    '0px 4px 8px rgba(30, 144, 255, 0.15)',
    '0px 8px 16px rgba(30, 144, 255, 0.2)',
    '0px 12px 24px rgba(30, 144, 255, 0.25)',
    '0px 16px 32px rgba(30, 144, 255, 0.3)',
    '0px 20px 40px rgba(30, 144, 255, 0.35)',
    '0px 24px 48px rgba(30, 144, 255, 0.4)',
    '0px 2px 4px rgba(255, 140, 10, 0.1)',
    '0px 4px 8px rgba(255, 140, 10, 0.15)',
    '0px 8px 16px rgba(255, 140, 10, 0.2)',
    '0px 12px 24px rgba(255, 140, 10, 0.25)',
    '0px 16px 32px rgba(255, 140, 10, 0.3)',
    '0px 20px 40px rgba(255, 140, 10, 0.35)',
    '0px 24px 48px rgba(255, 140, 10, 0.4)',
    '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '0px 4px 8px rgba(0, 0, 0, 0.15)',
    '0px 8px 16px rgba(0, 0, 0, 0.2)',
    '0px 12px 24px rgba(0, 0, 0, 0.25)',
    '0px 16px 32px rgba(0, 0, 0, 0.3)',
    '0px 20px 40px rgba(0, 0, 0, 0.35)',
    '0px 24px 48px rgba(0, 0, 0, 0.4)',
    '0px 32px 64px rgba(0, 0, 0, 0.45)',
    '0px 40px 80px rgba(0, 0, 0, 0.5)',
    '0px 48px 96px rgba(0, 0, 0, 0.55)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 8px 24px rgba(30, 144, 255, 0.4)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        },
        contained: {
          background: 'linear-gradient(135deg, #1E90FF 0%, #FF8C0A 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #4FA8FF 0%, #FFA940 100%)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(30, 144, 255, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(30, 144, 255, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1E90FF',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1a1a1a',
          border: '1px solid rgba(30, 144, 255, 0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#1E90FF',
            boxShadow: '0px 12px 40px rgba(30, 144, 255, 0.3)',
            transform: 'translateY(-8px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1a1a1a',
        },
      },
    },
  },
});
