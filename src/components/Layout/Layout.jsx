import { Box } from '@mui/material';
import { Header } from '../Header/Header';
import { StyledContainer } from './Layout.styles';

export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <StyledContainer maxWidth="lg">{children}</StyledContainer>
      </Box>
      {/* Footer will go here */}
    </Box>
  );
};
