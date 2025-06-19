import { LoginForm } from '@/components/LoginForm/LoginForm';
import { Box } from '@mui/material';
import { PageBackground } from '@/components/PageBackground/PageBackground';

export const Login = () => {
  return (
    <PageBackground>
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          pt: { xs: 8, sm: 9 },
          px: 3,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LoginForm />
      </Box>
    </PageBackground>
  );
};
