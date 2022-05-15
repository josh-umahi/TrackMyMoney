import React, { useState, createContext } from 'react';
import getUserId from '../utils/getUserId';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [userId] = useState(getUserId(localStorage));

    return (
        <AuthContext.Provider value={{ userId }}>
            {children}
        </AuthContext.Provider>
    );
};
