import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { StyledLink } from './Header.styles';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { useTheme } from '@mui/material/styles';

export const Header = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isLight
          ? 'rgba(128, 96, 57, 0.07)'
          : 'rgba(131, 123, 114, 0.18)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: 'none',
        borderBottom: isLight
          ? '1px solid rgba(0,0,0,0.08)'
          : '1px solid rgba(255,255,255,0.08)',
        transition: 'background-color 0.3s, backdrop-filter 0.3s',
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <StyledLink to="/">
            <Button color="inherit">Home</Button>
          </StyledLink>
          <StyledLink to="/catalogue">
            <Button color="inherit">Catalogue</Button>
          </StyledLink>
          <StyledLink to="/about">
            <Button color="inherit">About Us</Button>
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
