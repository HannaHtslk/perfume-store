import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));
