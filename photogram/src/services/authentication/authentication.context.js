import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) || null
    );
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser])

    function handleInput(event) {
        const {name, value} = event.target;
        setCredentials(prevCredentials => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    function loginRequest(event) {
        event.preventDefault();

        // https://axios-http.com/
        axios.post("https://adm-photogram.herokuapp.com/users/sign_in.json", { user: credentials })
        .then((response) => {
            setCurrentUser(response.data);
            console.log(response.data);
        });
    };
    
    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!currentUser,
                currentUser, 
                credentials,
                handleInput,
                loginRequest 
            }}
        >
            {children}
        </AuthenticationContext.Provider>        
    );
};