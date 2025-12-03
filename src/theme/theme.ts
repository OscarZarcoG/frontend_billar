'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007AFF',
      light: '#5AC8FA',
      dark: '#0051D5',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8E8E93',
      light: '#C7C7CC',
      dark: '#636366',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF3B30', // Apple Red
      light: '#FF6961',
      dark: '#D70015',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FF9500', // Apple Orange
      light: '#FFCC02',
      dark: '#FF6D00',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#5AC8FA', // Apple Light Blue
      light: '#64D2FF',
      dark: '#0A84FF',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#34C759', // Apple Green
      light: '#30D158',
      dark: '#248A3D',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F2F2F7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#3C3C43',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '2.125rem', // 34px - Large Title
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '1.75rem', // 28px - Title 1
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.375rem', // 22px - Title 2
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.25rem', // 20px - Title 3
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.0625rem', // 17px - Headline
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem', // 16px - Body
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.0625rem', // 17px - Body
      fontWeight: 400,
      lineHeight: 1.47,
    },
    body2: {
      fontSize: '0.9375rem', // 15px - Subheadline
      fontWeight: 400,
      lineHeight: 1.33,
    },
    button: {
      fontSize: '1.0625rem',
      fontWeight: 600,
      lineHeight: 1.5,
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem', // 12px - Caption 1
      fontWeight: 400,
      lineHeight: 1.33,
    },
  },
  shape: {
    borderRadius: 12, // Apple's standard corner radius
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1.0625rem',
          padding: '12px 20px',
          minHeight: 44, // Apple's minimum touch target
          boxShadow: 'none',
          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        contained: {
          background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
          backdropFilter: 'blur(20px)',
          border: '0.5px solid rgba(255,255,255,0.2)',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 20px rgba(0, 122, 255, 0.3)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        outlined: {
          borderWidth: '1px',
          borderColor: 'rgba(60, 60, 67, 0.29)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: '#007AFF',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            fontSize: '1.0625rem',
            minHeight: 44,
            '& fieldset': {
              borderColor: 'rgba(60, 60, 67, 0.29)',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(60, 60, 67, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#007AFF',
              borderWidth: '2px',
            },
            '&.Mui-error fieldset': {
              borderColor: '#FF3B30',
            },
          },
          '& .MuiInputLabel-root': {
            fontSize: '1.0625rem',
            '&.Mui-focused': {
              color: '#007AFF',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '0.5px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '0.5px solid rgba(255, 255, 255, 0.2)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: 'none',
          boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
