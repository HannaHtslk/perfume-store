import { Box, Typography, Button, Stack, Slide, Fade } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { PageBackground } from '@/components/PageBackground/PageBackground';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const theme = useTheme();
  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 300);
    setTimeout(() => setShowContent(true), 600);
  }, []);

  const handleShopNowClick = () => {
    navigate('/catalogue');
  };

  return (
    <PageBackground>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          minHeight: '100vh',
          width: '100%',
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
                Discover our exclusive collection of fragrances for every mood
                and occasion.
              </Typography>
              <Fade in={showContent} timeout={1200}>
                <Button
                  variant="contained"
                  color="inherit"
                  size="large"
                  onClick={handleShopNowClick}
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
    </PageBackground>
  );
};
