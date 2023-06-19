import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import { useAuth } from '../firebase';
// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const [user, loading, error] = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to='/auth/login' />;
  } 
 
  return <>{children}</>;
  
}
