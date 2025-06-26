import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { StyledLink } from './Header.styles';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { useTheme } from '@mui/material/styles';
import styles from './Header.module.css';

export const Header = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const getHeaderClass = () => {
    const baseClass = styles.header;
    const themeClass = isLight
      ? styles['header--light']
      : styles['header--dark'];
    return `${baseClass} ${themeClass}`;
  };

  return (
    <AppBar position="fixed" className={getHeaderClass()}>
      <Toolbar>
        <Box className={styles.navigation}>
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
