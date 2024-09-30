import React from "react";
import './styles.css';
import { BsBuildings } from "react-icons/bs";

const WeatherUnits = (props) => {
    const { buttonName, buttonOnClick } = props;
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
        <button className="buttonLabel" onClick={buttonOnClick}>
            <span className="unit_button_label">{buttonName}</span>
            <div className="unit_button">
                <div>
                    {getButtonIcon()}
                </div>
                <div className="unit_perc">
                    <span className="perc">90%</span>
                </div>
            </div>
        </button>

    );
};

export default WeatherUnits;