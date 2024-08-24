import React from "react";
import { useNavigate } from 'react-router-dom';
import InstallationPrompt from "../../Common/InstallationPrompt";
import './styles.css'

const LoginPage = ({ setIsLoggedIn, setIsRegistered }) => {
    const navigate = useNavigate();
    return (
        <div className="login_page">
            <div>
                <h1> ALERT 24 </h1>
                <span> SMART DIGITAL ALERTING SOLUTION </span>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '50px' }}>
                    <div style={{ width: '50%' }}>
                        <button onClick={() => navigate('/login')}>Login</button>
                    </div>
                    <div style={{ width: '50%' }}>
                        <button onClick={() => navigate('/sign-up')}>Register</button>
                    </div>
                </div>
            </div>

            <InstallationPrompt />
        </div>
    );
};

export default LoginPage