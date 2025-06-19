import { Box, Typography, Button, Stack, Slide, Fade } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

export const Home = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const bgImage = isLight
    ? 'https://images.unsplash.com/photo-1600025644459-ae91eefbac84?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    : 'https://images.unsplash.com/photo-1659167530799-982cfce69360?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  useEffect(() => {
    // Trigger animations with a slight delay
    setTimeout(() => setShowTitle(true), 300);
    setTimeout(() => setShowContent(true), 600);
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: isLight
            ? 'linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.17))'
            : 'rgba(30, 22, 54, 0.13)',
          backdropFilter: isLight ? 'brightness(0.65)' : 'none',
          zIndex: 1,
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          textAlign: 'left',
          maxWidth: '600px',
          pl: { xs: 3, sm: 6, md: 12 },
          pr: { xs: 3, sm: 4 },
        }}
      >
        <Slide direction="right" in={showTitle} timeout={800}>
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Welcome to Perfume Store
          </Typography>
        </Slide>

        <Slide direction="left" in={showContent} timeout={800}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                lineHeight: 1.4,
              }}
            >
              Discover our exclusive collection of fragrances for every mood and
              occasion.
            </Typography>
            <Fade in={showContent} timeout={1200}>
              <Button
                variant="contained"
                color="inherit"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  backdropFilter: 'blur(5px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: theme.palette.primary.contrastText,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  },
                }}
              >
                Shop Now
              </Button>
            </Fade>
          </Box>
        </Slide>
      </Stack>

      <Box
        sx={{
          position: 'absolute',
          right: { xs: 20, md: 60 },
          bottom: { xs: 40, md: 60 },
          maxWidth: '300px',
          textAlign: 'right',
          color: 'rgba(255, 255, 255, 0.7)',
          zIndex: 2,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontStyle: 'italic',
            fontWeight: 400,
            letterSpacing: '0.05em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          &ldquo;Elegance is when the inside is as beautiful as the
          outside&rdquo;
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            mt: 1,
            opacity: 0.8,
            fontWeight: 400,
            letterSpacing: '0.1em',
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
          }}
        >
          — COCO CHANEL
        </Typography>
      </Box>
    </Box>
  );
};
