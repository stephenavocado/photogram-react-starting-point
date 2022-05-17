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

    function loginRequestAxios(event) {
        event.preventDefault();

        // https://axios-http.com/
        axios.post("https://adm-photogram.herokuapp.com/users/sign_in.json", { user: credentials })
        .then((response) => {
            setCurrentUser(response.data);
            console.log(response.data);
        });
    };

    function loginRequest(event) {
        event.preventDefault();

        const url = "https://adm-photogram.herokuapp.com/users/sign_in";
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                "user": credentials 
            })
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCurrentUser(data);
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