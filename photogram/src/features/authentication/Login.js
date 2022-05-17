import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export default function Login() {
    const { currentUser, credentials, handleInput, loginRequest } = useContext(AuthenticationContext);
    
    return (
        <div>
            <div>Login {currentUser}</div>
            <form className="form-wrapper">
                <input  
                    className="form-input"   
                    type="text" 
                    name="email"
                    value={credentials.email} 
                    onChange={handleInput}
                />
                <input 
                    className="form-input"   
                    type="password" 
                    name="password"
                    value={credentials.password} 
                    onChange={handleInput}
                />
                <button 
                    className="form-button"
                    onClick={loginRequest}
                >
                    Login
                </button>
            </form>
        </div>
    );
};