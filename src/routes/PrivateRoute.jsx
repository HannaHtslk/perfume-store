import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from '@/redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const admin = useSelector(selectUser);
  return admin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
