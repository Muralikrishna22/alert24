import React, {useState, useEffect} from 'react';
import Base from '../../../Common/Base';
import './styles.css';
import Buttons from '../RegistrationButtons';
import WeatherUnits from '../WeatherUnits';
import { getDashboard } from '../../../ApiServices'
import ShareButton from '../../../Common/Base/ShareButton';

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

    const [dashboardArray, setDashboardArray] = useState([]);

    useEffect(() => {
        getDashboard((res) => {
                if(res?.data && res?.data.length > 0){
                    setDashboardArray(res?.data)
                }
                console.log('res', res)
            })
    }, [])

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
        <div className='dashboard'>
            {dashboardArray.length> 0 ? <table className='table'>
      <thead className='table-head'>
        <tr className='table-head-row'>
          <th className='table-head-row-data'>Date</th>
          <th className='table-head-row-data'>Ticket ID</th>
          <th className='table-head-row-data'>Resident Name</th>
          <th className='table-head-row-data'>Contact Info</th>
          <th className='table-head-row-data'>Residence Type</th>
          <th className='table-head-row-data'>City</th>
          <th className='table-head-row-data'>Share</th>
          <th className='table-head-row-data'>Status</th>
          <th className='table-head-row-data'>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {dashboardArray.map((entry, index) => (
          <tr className='table-body-row' key={index}>
            <td className='table-body-row-data'>{entry.date}</td>
            <td className='table-body-row-data'>{entry.ticketId}</td>
            <td className='table-body-row-data'>{entry.name}</td>
            <td className='table-body-row-data'>{entry.phone}</td>
            <td className='table-body-row-data'>{entry.residentType}</td>
            <td className='table-body-row-data'>{entry.city}</td>
            <td className='table-body-row-data share'><ShareButton shareData={{title: `${entry.remarks}`, description: `${entry.remarks}`}}>Share</ShareButton></td>
            <td className='table-body-row-data'>{entry.status}</td>
            <td className='table-body-row-data'>{`${entry.remarks}`}</td>
          </tr>
        ))}
      </tbody>
    </table> : null}</div>
    </div>
    );
};

const DashboardPage = () => (
    <Base>
        <Dashboard />
    </Base>
);
export default DashboardPage;