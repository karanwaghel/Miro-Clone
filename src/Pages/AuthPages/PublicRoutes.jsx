import { useAuth } from '@/ComponentProject/AuthContext/Auth';
import { Navigate } from 'react-router-dom';
import { Spinner } from '@/components/ui/spinner';

 function ProtectedRoute({children}) {

    const {CurrentUser,Loading} = useAuth();

    if(Loading) return <Spinner/>

    if(CurrentUser){
        return <Navigate to={'/'} replace/>        
    }

  return children;
}

export default ProtectedRoute;