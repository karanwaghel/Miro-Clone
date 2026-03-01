import { useAuth } from '@/ComponentProject/Context/AuthContext';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from './Spinner';

function ProtectedRoute({ children }) {
  const { CurrentUser, Loading } = useAuth();

  if (Loading) return <LoadingSpinner />;

  if (!CurrentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;