import { Box, Typography, Button, Stack, Slide, Fade } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { PageBackground } from '@/components/PageBackground/PageBackground';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

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
      <Box className={styles.container}>
        <Stack spacing={3} className={styles.heroContent}>
          <Slide direction="right" in={showTitle} timeout={800}>
            <Typography variant="h2" fontWeight={700} className={styles.title}>
              Welcome to Perfume Store
            </Typography>
          </Slide>

          <Slide direction="left" in={showContent} timeout={800}>
            <Box>
              <Typography variant="h5" className={styles.subtitle}>
                Discover our exclusive collection of fragrances for every mood
                and occasion.
              </Typography>
              <Fade in={showContent} timeout={1200}>
                <Button
                  variant="contained"
                  color="inherit"
                  size="large"
                  onClick={handleShopNowClick}
                  className={styles.shopNowButton}
                  sx={{
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  Shop Now
                </Button>
              </Fade>
            </Box>
          </Slide>
        </Stack>

        <Box className={`${styles.quoteContainer} ${styles.hiddenOnMobile}`}>
          <Typography variant="h6" className={styles.quote}>
            &ldquo;Elegance is when the inside is as beautiful as the
            outside&rdquo;
          </Typography>
          <Typography variant="subtitle2" className={styles.quoteAuthor}>
            — COCO CHANEL
          </Typography>
        </Box>
      </Box>
    </PageBackground>
  );
};
