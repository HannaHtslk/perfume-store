import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const About = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const bgImage = isLight
    ? 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=3432&auto=format&fit=crop'
    : 'https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=3540&auto=format&fit=crop';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'rgba(30, 22, 54, 0.13)',
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{ position: 'relative', zIndex: 2, pt: { xs: 8, sm: 9 }, px: 3 }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        {/* Add your about page content here */}
      </Box>
    </Box>
  );
};
