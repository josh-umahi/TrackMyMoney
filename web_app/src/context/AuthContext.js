import React, { useState, createContext } from 'react';
import { useQuery } from 'react-query';
import getUserId from '../utils/getUserId';
import { getArrayOfUserIDWithIncomingChange } from '../utils/queryFunctions';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const { data } = useQuery("arrayOfUserIDWithIncomingChange", getArrayOfUserIDWithIncomingChange)

    let userId = ""
    if (data) {
        userId = getUserId(localStorage, data.data)
    }

    return (
        <AuthContext.Provider value={{ userId }}>
            {children}
        </AuthContext.Provider>
    );
};
