import { useAuth } from '@/ComponentProject/AuthContext/Context';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from './Spinner';

 function ProtectedRoute({children}) {

    const {CurrentUser,Loading} = useAuth();

    if(Loading) return <LoadingSpinner/>

    if(CurrentUser){
        return <Navigate to={'/'} replace/>        
    }

  return children;
}

export default ProtectedRoute;