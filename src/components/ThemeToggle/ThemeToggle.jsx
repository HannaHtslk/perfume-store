import { IconButton, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/redux/theme/slice';
import { selectMode } from '@/redux/theme/selectors';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton
        onClick={() => dispatch(toggleTheme())}
        color="inherit"
        sx={{ ml: 2 }}
      >
        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
};
