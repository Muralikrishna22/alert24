import React from "react";
import './styles.css';

const Input = ({placeholder}) => (
    <input type="text" placeholder={placeholder} className='input' />
);

export default Input;