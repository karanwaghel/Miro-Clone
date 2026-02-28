import { useAuth } from '@/ComponentProject/AuthContext/Context';
import { Navigate } from 'react-router-dom';

 function ProtectedRoute({children}) {

    const {CurrentUser} = useAuth();

    if(!CurrentUser){
        return <Navigate to={'/login'} replace/>        
    }

  return children;
}

export default ProtectedRoute;