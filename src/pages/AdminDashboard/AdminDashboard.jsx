import { useDispatch } from 'react-redux';
import { logout } from '@/redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { PageBackground } from '@/components/PageBackground/PageBackground';

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

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
          flexDirection: 'column',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </PageBackground>
  );
};
