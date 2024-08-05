import React from "react";
import { useNavigate } from 'react-router-dom';
import InstallationPrompt from "../../Common/InstallationPrompt";

const LoginPage = ({ setIsLoggedIn, setIsRegistered }) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1> ALERT 24 </h1>
            <span> SMART DIGITAL ALERTING SOLUTION </span>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '50px' }}>
                <div style={{ width: '50%' }}>
                    <button onClick={() => navigate('/login')}>Login</button>
                </div>
                <div style={{ width: '50%' }}>
                    <button onClick={() => navigate('../register')}>Register</button>
                </div>
            </div>
            <InstallationPrompt />
        </div>
    );
};

export default LoginPage