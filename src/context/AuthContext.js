import React, { useState, createContext, useEffect } from 'react';
import getUserId from '../utils/getUserId';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        (async function () {
            const assignedUserId = await getUserId(localStorage)
            setUserId(assignedUserId)
        })();
    }, [])

    return (
        <AuthContext.Provider value={{ userId }}>
            {children}
        </AuthContext.Provider>
    );
};
