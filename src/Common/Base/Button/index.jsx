import React from "react";
import './styles.css';

const Button = ({children, type}) => {
        return (
            <button type={type} className="button">
                {children}
            </button>
        );
    };
    
export default Button;