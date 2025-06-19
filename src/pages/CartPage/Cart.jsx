import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const Cart = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: isLight
          ? 'linear-gradient(135deg,rgb(119, 115, 115) 0%, #f0f0f0 50%, #e6e6e6 100%)'
          : 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 50%, #111111 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: isLight
            ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)'
            : 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: isLight
            ? 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)'
            : 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{ position: 'relative', zIndex: 2, pt: { xs: 8, sm: 9 }, px: 3 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Your Shopping Cart
        </Typography>
        {/* Add your cart content here */}
      </Box>
    </Box>
  );
};
