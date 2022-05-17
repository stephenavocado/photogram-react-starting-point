import React, { useContext, useState } from "react";

export default function Login() {
    
    return (
        <div className="page-wrapper">
            <h1>Login {currentUser}</h1>
            <form className="form-wrapper">
                <h3>email</h3>
                <input  
                    className="form-input"   
                    type="text" 
                    name="email"
                />
                <h3>password</h3>
                <input 
                    className="form-input"   
                    type="password" 
                    name="password"
                />
                <button 
                    className="form-button"
                >
                    Login
                </button>
            </form>
        </div>
    );
};