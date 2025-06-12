import { Box } from '@mui/material';
import { Header } from '../Header/Header';
import { StyledContainer } from './Layout.styles';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(isHome ? {} : { pt: { xs: 8, sm: 9 } }), // Only add padding-top if not Home
        }}
      >
        {isHome ? (
          children
        ) : (
          <StyledContainer maxWidth="lg">{children}</StyledContainer>
        )}
      </Box>
      {/* Footer will go here */}
    </Box>
  );
};
