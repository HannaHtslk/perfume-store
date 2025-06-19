import { Box, Typography, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const Home = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const bgImage = isLight
    ? 'https://images.unsplash.com/photo-1600025644459-ae91eefbac84?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    : 'https://images.unsplash.com/photo-1659167530799-982cfce69360?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

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
        justifyContent: 'center',
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
      <Stack
        spacing={3}
        alignItems="center"
        sx={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" fontWeight={700}>
          Welcome to Perfume Store
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: 500 }}>
          Discover our exclusive collection of fragrances for every mood and
          occasion.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Shop Now
        </Button>
      </Stack>
    </Box>
  );
};
