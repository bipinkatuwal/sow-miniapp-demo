import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router';

const PublicRoute = ({ children }) => {
    const {
        isAuthenticated
    } = useAuth();

    return !isAuthenticated ? children : <Navigate to={"/pricelist"} replace />
}

export default PublicRoute