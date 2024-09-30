import React from 'react';
import Base from '../../../Common/Base';
import './styles.css';
import Buttons from '../RegistrationButtons';
import WeatherUnits from '../WeatherUnits';

const Dashboard = () => {

    const registrationButtons = ['COMPANY REGISTRATION', 'COMMERCIAL PROPERTY REGISTRATION', 'EDUCATIONAL INSTITUTE REGISTRATION', 'GOVT OFFICE REGISTRATION', 'BUY INSURANCE'];

    const unitButtons = ['CLOUD COVERAGE', 'HUMIDITY', 'WIND', 'DUE POINT', 'AIR QUALITY'];

    const handleClickButton = (label) => {
        switch (label) {
            case 'COMPANY REGISTRATION':
            default:
               return ()=>(null);
        }
    };

    return (
    <div className='monitor_container'>
        <div className='note' >
            <span className='note_text' >
            New State Govt Rule All Commercial Properties need to Register By 30/09/2024
            </span>
        </div>
        <div className='registration_buttons'>
            {registrationButtons.map((label) => (
                <Buttons buttonName={label} />
            ))}
        </div>
        <div className='image_message'>
            <div className='date_n_alert_note'>
                <div className='date_place'>
                    <span>
                        27/09/2024
                        FRIDAY
                        VISAKHAPATNAM
                    </span>
                </div>
                <div className='alert_note'>
                    <span>
                    CLOUDY WEATHER OUTSIDE MOST CHANCES OF RAIN
                    </span>
                </div>
            </div>
            <div className='weather_units'>
            {unitButtons.map((label) => (
                <WeatherUnits buttonName={label} />
            ))}
            </div>
        </div>
    </div>
    );
};

const HomePage = () => (
    <Base>
        <Dashboard />
    </Base>
);
export default HomePage;