import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
})
const useAxiosSecure = () => {
    const { user, logOut } = useAuth()
    useEffect(() => {
        const requestInterceptors = axiosSecure.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config
        })
        const responseInterceptors = axiosSecure.interceptors.response.use((response) => {
            return response
        }, (error) => {
            if (error.status === 401 || error.status === 403) {
                logOut();
            }
            console.log(error.status)
            return Promise.reject(error);
        })
        // interceptor response

        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptors)
            axiosSecure.interceptors.response.eject(responseInterceptors)
        }
    }, [logOut, user])
    return axiosSecure;
};

export default useAxiosSecure;