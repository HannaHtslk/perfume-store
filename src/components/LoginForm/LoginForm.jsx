import { useDispatch, useSelector } from 'react-redux';
import { selectUserLoading, selectUserError } from '@/redux/auth/selectors';
import { login } from '@/redux/auth/operations';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Alert } from '@mui/material';
import {
  StyledPaper,
  StyledForm,
  StyledTextField,
  StyledButton,
} from './LoginForm.styles';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();
      navigate('/admin');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" component="h2" align="center" gutterBottom>
        Admin Login
      </Typography>

      <StyledForm onSubmit={handleSubmit}>
        <StyledTextField
          type="email"
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          fullWidth
        />

        <StyledTextField
          type="password"
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          fullWidth
        />

        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          fullWidth
        >
          {loading ? 'Logging in...' : 'Login'}
        </StyledButton>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </StyledForm>
    </StyledPaper>
  );
};
