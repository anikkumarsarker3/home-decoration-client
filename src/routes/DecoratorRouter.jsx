import React from 'react';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import { Navigate } from 'react-router';

const DecoratorRouter = ({ children }) => {
    const { roleLoading, role } = useRole();
    if (roleLoading) {
        return <LoadingSpinner />
    }
    if (role === 'decorator') {
        return children
    }
    return <Navigate to='/' replace={true} />
};

export default DecoratorRouter;
