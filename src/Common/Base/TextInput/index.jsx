import React from "react";
import './styles.css';

const TextInput = ({placeholder, helpText='', ...rest}) => (
    <div className={`${helpText && 'help=text'}`}>
    <input type="text" placeholder={placeholder} className='input' {...rest}/>
    {helpText && (<span class="help-block">{helpText}</span>)}
    </div>
);

export default TextInput;