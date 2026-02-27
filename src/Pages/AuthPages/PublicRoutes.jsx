import { useAuth } from '@/ComponentProject/AuthContext/Auth';
import { Navigate } from 'react-router-dom';

 function ProtectedRoute({children}) {

    const {CurrentUser,Loading} = useAuth();

    if(Loading) return 

    if(CurrentUser){
        return <Navigate to={'/'} replace/>        
    }

  return children;
}

export default ProtectedRoute;