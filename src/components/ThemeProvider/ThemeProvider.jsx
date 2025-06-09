import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import { selectMode } from '@/redux/theme/selectors';
import { createAppTheme } from '../../utils/theme';

export const ThemeProvider = ({ children }) => {
  const mode = useSelector(selectMode);
  const theme = createAppTheme(mode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
