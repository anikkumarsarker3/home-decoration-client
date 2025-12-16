import React from 'react';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import { Navigate } from 'react-router';

const UserRouter = ({ children }) => {
    const { roleLoading, role } = useRole();
    if (roleLoading) {
        return <LoadingSpinner />
    }
    if (role === 'user') {
        return children
    }
    return <Navigate to='/' replace={true} />
};

export default UserRouter;
