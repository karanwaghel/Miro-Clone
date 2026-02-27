import React from 'react';
import { useAuth } from '@/ComponentProject/AuthContext/Auth';
import { Navigate } from 'react-router-dom';

 function ProtectedRoute({children}) {

    const {CurrentUser} = useAuth()

    if(!CurrentUser){
        return <Navigate to={'/login'} replace/>        
    }

  return children;
}

export default ProtectedRoute;