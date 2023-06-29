import React from 'react';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
    const token = localStorage.getItem('token')
    if (token) {
        return true
    } else {
        return false
    }
}

const ProtectedRoutes = ({ children }) => {
    const auth = useAuth()

    return auth ? children : <Navigate to="/" />
}
export default ProtectedRoutes;