import React, { useContext } from "react";
import Login from "../features/authentication/Login.js";
import { AuthenticationContext } from "../services/authentication/authentication.context.js";

export const Navigation = () => {
    const { currentUser, isAuthenticated } = useContext(AuthenticationContext);
    
    return (
        isAuthenticated ? JSON.stringify(currentUser) : <Login />
    );
};