import { LoginForm } from '@/components/LoginForm/LoginForm';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const Login = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const bgImage = isLight
    ? 'https://images.unsplash.com/photo-1600025644459-ae91eefbac84?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    : 'https://images.unsplash.com/photo-1659167530799-982cfce69360?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

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
      <Box sx={{ position: 'relative', zIndex: 2, pt: { xs: 8, sm: 9 } }}>
        <LoginForm />
      </Box>
    </Box>
  );
};
