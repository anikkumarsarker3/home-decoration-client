import React from 'react';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <LoadingSpinner />
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname} replace='true' />

};

export default PrivateRouter;