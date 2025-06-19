import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const Cart = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const bgImage = isLight
    ? 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=3548&auto=format&fit=crop'
    : 'https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?q=80&w=3548&auto=format&fit=crop';

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
          Your Cart
        </Typography>
        {/* Add your cart page content here */}
      </Box>
    </Box>
  );
};
