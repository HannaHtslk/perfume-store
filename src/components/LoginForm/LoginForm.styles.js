import { styled } from '@mui/material/styles';
import { Paper, TextField, Button } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  maxWidth: '400px',
  margin: '0 auto',
  marginTop: theme.spacing(4),
}));

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
