import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { StyledLink } from './Header.styles';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export const Header = () => {
  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: 'transparent',
        backdropFilter: 'blur(8px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <StyledLink to="/">
            <Button color="inherit">Home</Button>
          </StyledLink>
          <StyledLink to="/about">
            <Button color="inherit">About Us</Button>
          </StyledLink>
          <StyledLink to="/catalogue">
            <Button color="inherit">Catalogue</Button>
          </StyledLink>
          <StyledLink to="/cart">
            <Button color="inherit">Cart</Button>
          </StyledLink>
          <StyledLink to="/admin">
            <Button color="inherit">Admin Dashboard</Button>
          </StyledLink>
        </Box>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};
