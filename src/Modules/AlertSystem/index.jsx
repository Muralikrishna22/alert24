import React from 'react'
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






const AlertSystem = () => {

    const alertCategories = [
        {
            name: 'Rains',
            icon: <FaCloudMoonRain />
        },
        {
            name: 'Winds',
            icon: <RiWindyLine />
        },
        {
            name: 'Slides',
            icon: <GiMountainCave />
        },
        {
            name: 'Roads',
            icon: <FaRoadCircleExclamation />
        },
        {
            name: 'Fire',
            icon: <ImFire />
        },
        {
            name: 'Electricity',
            icon: <MdElectricBolt />
        },
        {
            name: 'Earth Quake',
            icon: <GiEarthSpit />
        },
        {
            name: 'River Over flow',
            icon: <FaWater />
        },
        {
            name: 'Gas leaks',
            icon: <GiGasStove />
        },
        {
            name: 'Heat wave ',
            icon: <PiThermometerHot />
        },
        {
            name: 'Accedents',
            icon: <FaRegHospital />
        },
        {
            name: 'Out door',
            icon: <MdOutlineSensorDoor />
        },
    ]


    function showSystemNotification() {
        if ("Notification" in window) {
            if (Notification.permission === "granted") {
                let notification = new Notification("Need your attention", {
                    body: "This site uses notifications for the best user experience. Thank you for understanding",
                    icon: 'ALERT 24',
                });
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then((permission) => {
                    if (permission === "granted") {
                        let notification = new Notification("Need your attention", {
                            body: "This site uses notifications for the best user experience. Thank you for understanding",
                            icon: 'ALERT 24',
                        });
                    } else if (permission === "denied") {
                        alert("This site uses notifications for the best user experience. Thank you for understanding");
                    }
                });
            }
        }
    }

    return (
        <Base>
            <div className='alert_system_container'>
                <h3>Alerting system</h3>
                
                <ul className='alerts_list'>
                    {
                        alertCategories?.map((alert, ind) => (
                            <div key={ind} className='alert_container' onClick={showSystemNotification}>
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