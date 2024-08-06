import React from 'react';
import './styles.css';
import Base from '../../Common/Base';
import TextInput from '../../Common/Base/TextInput';
import Button from '../../Common/Base/Button';
import { useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";


// Registration Form Component
const RegistrationForm = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/home')
  }
  return (
    <div className='container'>
        <div className='formContainer'>
      <FaUser className='avatar'/>
      <form className='form' onSubmit={handleSubmit}>
        <TextInput placeholder="First Name" />
        <TextInput placeholder="Last Name" />
        <TextInput placeholder="Contact No" />
        <TextInput placeholder="Email" />
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
