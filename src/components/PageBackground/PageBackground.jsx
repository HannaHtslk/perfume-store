import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styles from './PageBackground.module.css';

export const PageBackground = ({ children, withImage = true }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const getBackgroundClass = () => {
    const baseClass = styles.pageBackground;
    const imageClass = withImage ? 'withImage' : 'withoutImage';
    const themeClass = isLight ? 'light' : 'dark';

    return `${baseClass} ${
      styles[`pageBackground--${imageClass}--${themeClass}`]
    }`;
  };

  return <Box className={getBackgroundClass()}>{children}</Box>;
};
