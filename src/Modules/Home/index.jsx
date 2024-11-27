import React, { useEffect, useState } from 'react'
import './styles.css'
import { FaCloudMoonRain } from "react-icons/fa";
import { RiWindyLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { TbAirConditioning } from "react-icons/tb";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import {FaTachometerAlt} from "react-icons/fa"
import { BiSolidBellRing } from "react-icons/bi";
import Base from '../../Common/Base';
import { getAlertMessage } from '../../ApiServices';



const Home = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const phone = window.localStorage.getItem('phoneNumber')
        if(phone === '+919315350373') {
            setIsAdmin(true)
        }
        console.log('phone', phone)
    }, [])

    function showSystemNotification(data) {
        const audio = new Audio('/src/assets/alert.mp3'); // Replace with the correct path to your audio file
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
            // Play the audio
            audio.play().catch((err) => console.error("\n\n\nError playing audio:", err));
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then((permission) => {
                    if (permission === "granted") {
                        let notification = new Notification(data.title, {
                            body: data.description,
                            icon: 'ALERT 24',
                        });
                    // Play the audio
                    audio.play().catch((err) => console.error("\n\n\nError playing audio:", err));
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
                console.log('res', JSON.stringify(res, null, 1))
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
            <div className='home_container'>
                <div className='banner_container'>
                    Cloudy Weather out side most chances of rain.
                </div>
                <div className='sub_menu'>
                    <div className='item'>
                        <FaCloudMoonRain className="icon" />
                        <div>
                            Rainy
                        </div>
                    </div>
                    <div className='item'>
                        <RiWindyLine className="icon" />
                        <div>
                            Windy
                        </div>
                    </div>
                    <div className='item'>
                        <WiHumidity className="icon" />
                        <div>
                            Humid
                        </div>
                    </div>
                    <div className='item'>
                        <TbAirConditioning className="icon" />
                        <div>
                            Air Quality
                        </div>
                    </div>
                </div>
                <div className='categories_list'>
                    <a className='category_item' href='/create_address'>
                        <IoHomeSharp className="icon" />
                        <div>
                            Address Registration
                        </div>
                    </a>
                    <a className='category_item' href='/connections'>
                        <IoIosPeople className="icon" />

                        <div>
                            Manage connections
                        </div>
                    </a>
                    <a className='category_item' href='/alert-system'>
                        <BiSolidBellRing className="icon" />
                        <div>
                            Users Alerts
                        </div>
                    </a>
                    <a className='category_item'>
                        <FaHandsHelping className="icon" />
                        <div>
                            Help/Complants
                        </div>
                    </a>
                   {isAdmin &&  <a className='category_item' href='/govt/alert-system'>
                        <BiSolidBellRing className="icon" />
                        <div>
                            Govt Alerts
                        </div>
                    </a>
                    }
                    {isAdmin && <a className='category_item' href='/govt_monitor'>
                        <FaTachometerAlt className="icon" />
                        <div>
                            Dashboard
                        </div>
                    </a>}
                </div>
            </div>
        </Base>
    )
}

export default Home