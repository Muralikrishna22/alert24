import React, { useEffect } from 'react'
import Base from '../../Common/Base'
import './styles.css'
import { FaCloudMoonRain } from "react-icons/fa";
import { RiWindyLine } from "react-icons/ri";
import { GiMountainCave } from "react-icons/gi";
import { FaRoadCircleExclamation } from "react-icons/fa6";
import { ImFire } from "react-icons/im";
import { MdElectricBolt } from "react-icons/md";
import { GiEarthSpit } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { GiGasStove } from "react-icons/gi";
import { PiThermometerHot } from "react-icons/pi";
import { FaRegHospital } from "react-icons/fa";
import { MdOutlineSensorDoor } from "react-icons/md";
import { getAlertMessage, sendAlertMessage } from '../../ApiServices';

const AlertSystem = () => {

    const alertCategories = [
        {
            name: 'Rains',
            icon: <FaCloudMoonRain />,
            title: 'Rain Alert',
            description: 'Heavy rainfall is expected in your area. Please take necessary precautions.'
        },
        {
            name: 'Winds',
            icon: <RiWindyLine />,
            title: 'Wind Alert',
            description: 'Strong winds are forecasted. Secure outdoor items and avoid unnecessary travel.'
        },
        {
            name: 'Slides',
            icon: <GiMountainCave />,
            title: 'Landslide Alert',
            description: 'Possible landslides in hilly areas. Stay cautious and avoid high-risk zones.'
        },
        {
            name: 'Roads',
            icon: <FaRoadCircleExclamation />,
            title: 'Road Alert',
            description: 'Roads may be blocked or damaged. Follow traffic updates and reroute if needed.'
        },
        {
            name: 'Fire',
            icon: <ImFire />,
            title: 'Fire Alert',
            description: 'Fire hazards in the area. Stay informed and follow emergency services’ advice.'
        },
        {
            name: 'Electricity',
            icon: <MdElectricBolt />,
            title: 'Electricity Alert',
            description: 'Power outages expected due to adverse weather. Prepare for potential blackouts.'
        },
        {
            name: 'Earthquake',
            icon: <GiEarthSpit />,
            title: 'Earthquake Alert',
            description: 'Earthquake detected in your region. Follow safety procedures immediately.'
        },
        {
            name: 'River Overflow',
            icon: <FaWater />,
            title: 'Flood Alert',
            description: 'River overflow may cause flooding. Evacuate low-lying areas and stay safe.'
        },
        {
            name: 'Gas Leaks',
            icon: <GiGasStove />,
            title: 'Gas Leak Alert',
            description: 'Gas leaks reported nearby. Evacuate immediately and avoid open flames.'
        },
        {
            name: 'Heatwave',
            icon: <PiThermometerHot />,
            title: 'Heatwave Alert',
            description: 'Extreme temperatures expected. Stay hydrated and avoid outdoor activities.'
        },
        {
            name: 'Accidents',
            icon: <FaRegHospital />,
            title: 'Accident Alert',
            description: 'Accidents reported on major roads. Drive cautiously and avoid affected areas.'
        },
        {
            name: 'Outdoor',
            icon: <MdOutlineSensorDoor />,
            title: 'Outdoor Alert',
            description: 'Adverse weather conditions for outdoor activities. Postpone non-essential plans.'
        },
    ];



    function showSystemNotification(data) {
        if ("Notification" in window) {
            if (Notification.permission === "granted") {
                let notification;
                if(data){
                    notification = new Notification(data.title, {
                        body: data.description,
                        icon: 'ALERT 24',
                    });
                }else{
                    notification = new Notification("Need your attention", {
                        body: "This site uses notifications for the best user experience. Thank you for understanding",
                        icon: 'ALERT 24',
                    });
                }
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then((permission) => {
                    if (permission === "granted") {
                        let notification = new Notification(data.title, {
                            body: data.description,
                            icon: 'ALERT 24',
                        });
                    } else if (permission === "denied") {
                        alert("This site uses notifications for the best user experience. Thank you for understanding");
                    }
                });
            }
        }
    }

    useEffect(() => {
        let notificationInteval = setInterval(() => {
            getAlertMessage((res) => {
                if(res?.data?.notify){
                    showSystemNotification(res?.data?.data)
                }
            })
        }, 5000)

        return () => {
            clearInterval(notificationInteval)
        }
    })

    return (
        <Base>
            <div className='alert_system_container'>
                <h3>Alerting system</h3>

                <ul className='alerts_list'>
                    {
                        alertCategories?.map((alert, ind) => (
                            <div key={ind} className='alert_container' onClick={() => sendAlertMessage({title: alert.title, description:alert.description })}>
                                {alert.icon}
                                <div>
                                    {alert.name}
                                </div>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </Base>
    )
}

export default AlertSystem