import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { auth } from '../firebase/firebase.init';
import { deleteUser, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [emailValue, setEmailValue] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const userRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleRegister = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const userResetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const deleteUserAccount = () => {
        return deleteUser(auth.currentUser)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                console.log(currentUser)
            }
            setLoading(false)
        })

        return () => {
            unSubcribe()
        }

    }, [])

    const authInfo = {
        user,
        loading,
        setUser,
        userRegister,
        signInUser,
        googleRegister,
        logOut,
        updateUserProfile,
        emailValue,
        setEmailValue,
        userResetPassword,
        deleteUserAccount,


    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;