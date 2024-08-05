import React from 'react';
import './styles.css';
import Base from '../../Common/Base';
import Input from '../../Common/Base/Input';
import Button from '../../Common/Base/Button';

// Registration Form Component
const RegistrationForm = () => {
  return (
    <div className='container'>
        <div className='formContainer'>
      <div className='avatar'></div>
      <form className='form'>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Contact No" />
        <Input placeholder="Email" />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
    </div>
  );
};

// Main App Component
const RegistrationPage = () => {
  return (
    <Base>
      <RegistrationForm />
    </Base>
  );
};

export default RegistrationPage;
