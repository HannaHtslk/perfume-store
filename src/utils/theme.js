import { createTheme } from '@mui/material/styles';

// Create theme function that accepts mode
export const createAppTheme = mode =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // Light mode - Sophisticated, warm colors
            primary: {
              main: '#8B7355', // Warm Taupe
              light: '#A38B6D',
              dark: '#6B5A43',
              contrastText: '#FFFFFF',
            },
            secondary: {
              main: '#9B8EA9', // Soft Lavender
              light: '#B5A9C2',
              dark: '#7A6F8A',
              contrastText: '#FFFFFF',
            },
            background: {
              default: '#F8F7F9', // Very light lavender
              paper: '#FFFFFF',
            },
            text: {
              primary: '#4A4453', // Deep lavender
              secondary: '#7A6F8A',
            },
            action: {
              hover: 'rgba(139, 115, 85, 0.08)', // Primary color with opacity
              selected: 'rgba(139, 115, 85, 0.16)',
              disabled: 'rgba(139, 115, 85, 0.3)',
            },
          }
        : {
            // Dark mode - Muted, sophisticated colors
            primary: {
              main: '#B4A6AB', // Soft Mauve
              light: '#C4B8BC',
              dark: '#8A7F83',
              contrastText: '#FFFFFF',
            },
            secondary: {
              main: '#7D8B99', // Soft Blue Grey
              light: '#95A3B1',
              dark: '#5F6B77',
              contrastText: '#FFFFFF',
            },
            background: {
              default: '#1A1D20', // Deep blue grey
              paper: '#2C3E50',
            },
            text: {
              primary: '#F5F6F7',
              secondary: '#95A3B1',
            },
            action: {
              hover: 'rgba(180, 166, 171, 0.08)', // Secondary color with opacity
              selected: 'rgba(180, 166, 171, 0.16)',
              disabled: 'rgba(180, 166, 171, 0.3)',
            },
          }),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: {
              xs: 2,
              sm: 3,
              md: 4,
            },
            paddingRight: {
              xs: 2,
              sm: 3,
              md: 4,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: mode === 'light' ? '#A38B6D' : '#8A7F83',
              color: '#fff',
              boxShadow:
                mode === 'light'
                  ? '0 2px 8px rgba(139, 115, 85, 0.15)'
                  : '0 2px 8px rgba(180, 166, 171, 0.15)',
            },
            '&:active': {
              transform: 'translateY(0)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            },
          },
          contained: {
            '&:hover': {
              backgroundColor: mode === 'light' ? '#6B5A43' : '#8A7F83',
            },
          },
          outlined: {
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            borderBottom: '1px solid',
            borderColor:
              mode === 'light'
                ? 'rgba(0, 0, 0, 0.08)'
                : 'rgba(255, 255, 255, 0.08)',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor:
                mode === 'light'
                  ? 'rgba(125, 139, 153, 0.08)'
                  : 'rgba(180, 166, 171, 0.08)',
              transform: 'scale(1.1)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow:
                mode === 'light'
                  ? '0 8px 16px rgba(0, 0, 0, 0.1)'
                  : '0 8px 16px rgba(0, 0, 0, 0.3)',
            },
          },
        },
      },
    },
    typography: {
      fontFamily: '"Montserrat", sans-serif',
      h1: {
        fontSize: '2rem',
        fontWeight: 300,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        '@media (min-width:600px)': {
          fontSize: '2.5rem',
        },
        '@media (min-width:900px)': {
          fontSize: '3rem',
        },
      },
      h2: {
        fontSize: '1.75rem',
        fontWeight: 300,
        letterSpacing: '0.1em',
        '@media (min-width:600px)': {
          fontSize: '2rem',
        },
        '@media (min-width:900px)': {
          fontSize: '2.5rem',
        },
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 300,
        letterSpacing: '0.08em',
        '@media (min-width:600px)': {
          fontSize: '1.75rem',
        },
        '@media (min-width:900px)': {
          fontSize: '2rem',
        },
      },
      h4: {
        fontWeight: 300,
        letterSpacing: '0.08em',
      },
      h5: {
        fontWeight: 300,
        letterSpacing: '0.08em',
      },
      h6: {
        fontWeight: 300,
        letterSpacing: '0.08em',
      },
      subtitle1: {
        fontWeight: 300,
        letterSpacing: '0.05em',
      },
      subtitle2: {
        fontWeight: 300,
        letterSpacing: '0.04em',
      },
      body1: {
        fontWeight: 300,
        letterSpacing: '0.03em',
      },
      body2: {
        fontWeight: 300,
        letterSpacing: '0.03em',
      },
      button: {
        fontWeight: 400,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
      },
    },
  });
