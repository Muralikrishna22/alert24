import React, { useState } from 'react';
import './styles.css';
import Base from '../../Common/Base';
import TextInput from '../../Common/Base/TextInput';
import Button from '../../Common/Base/Button';
import { FaUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

// Registration Form Component
const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className='formContainer'>
        <FaUser className='avatar' />
        <form className='form'>
          <TextInput placeholder="Contact No" />
          <TextInput placeholder="Email (Optional)" />
          <Button isDisabled={isLoggedIn} onClick={() => setIsLoggedIn(prev => !prev)} type="button">Login</Button>
        </form>
        <div>
          {isLoggedIn && (
            <>
            <TextInput placeholder="Enter OTP... " />
            <Button onClick={() => navigate('/home')} type="button">Verify</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const LoginPage = () => {
  return (
    <Base>
      <LoginForm />
    </Base>
  );
};

export default LoginPage;
