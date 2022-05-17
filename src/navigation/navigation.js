import React, { useContext } from "react";
import Login from "../features/authentication/Login.js";
import Feed from "../features/feed/Feed.js";
import { AuthenticationContext } from "../services/authentication/authentication.context.js";

export const Navigation = () => {
    const { isAuthenticated } = useContext(AuthenticationContext);
    
    return (
        isAuthenticated ? <Feed /> : <Login />
    );
};