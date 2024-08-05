import React from 'react';
import './styles.css';
import Base from '../../Common/Base';
import Input from '../../Common/Base/Input';
import Button from '../../Common/Base/Button';

// Registration Form Component
const LoginForm = () => {
  return (
    <div className='container'>
        <div className='formContainer'>
      <div className='avatar'></div>
      <form className='form'>
        <Input placeholder="Contact No" />
        <Input placeholder="Email" />
        <Button type="submit">Login</Button>
      </form>
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
