import React from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';
const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useContext(AuthContext);
      
    return isAuthenticated ? element : <Navigate to="/login" />;
    };


export default ProtectedRoute;