import React from "react";
import './styles.css';
import { BsBuildings } from "react-icons/bs";

const Buttons = (props) => {
    const { buttonName, buttonOnClick} = props;
    const getButtonIcon = (buttonName) => {
        const buttonIcon = buttonName;
        switch (buttonIcon) {
            case 'company':
                return (
                    <BsBuildings />
                );
            default:
                return (
                    <BsBuildings />
                );
        }
    }; 

    return (
        <button onClick={buttonOnClick}  className="button">
            <div>
                {getButtonIcon()}
            </div>
            <div className="button_label">{buttonName}</div>
        </button>
    );
};

export default Buttons;