import React from "react";
import './styles.css';

const Button = ({children, type, onClick, isDisabled=false}) => {
        return (
            <button disabled={isDisabled} onClick={onClick} type={type} className="button">
                {children}
            </button>
        );
    };
    
export default Button;