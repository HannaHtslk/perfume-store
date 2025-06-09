import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

export const StyledLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  margin: theme.spacing(0, 1),
  '&:hover': {
    color: theme.palette.primary.light,
  },
}));
