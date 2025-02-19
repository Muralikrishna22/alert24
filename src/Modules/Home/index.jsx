import React from 'react'
import './styles.css'
import { FaCloudMoonRain } from "react-icons/fa";
import { RiWindyLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { TbAirConditioning } from "react-icons/tb";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { BiSolidBellRing } from "react-icons/bi";
import Base from '../../Common/Base';



const Home = () => {

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
                            Alerts
                        </div>
                    </a>
                    <a className='category_item'>
                        <FaHandsHelping className="icon" />
                        <div>
                            Help/Complants
                        </div>
                    </a>
                </div>
            </div>
        </Base>
    )
}

export default Home