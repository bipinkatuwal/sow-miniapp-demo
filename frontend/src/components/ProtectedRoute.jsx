import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = ({ children }) => {
    const {
        isAuthenticated
    } = useAuth();

    return isAuthenticated ? children : <Navigate to={"/"} replace />
}

export default ProtectedRoute