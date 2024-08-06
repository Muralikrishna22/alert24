import React from 'react'
import './styles.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCloudMoonRain } from "react-icons/fa";
import { RiWindyLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { TbAirConditioning } from "react-icons/tb";
import Base from '../../Common/Base';


const Connections = () => {

    const members = [
        {
            name: 'Teja'
        },
        {
            name: 'Vamsi'
        },
        {
            name: 'Allan'
        },
        {
            name: 'Murali'
        },
    ]

    return (
        <Base>
            <div className='connections_container'>
                <h3>Manage connections</h3>
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
                <h3>List of connections</h3>
                <div className='connnections_list'>
                    <ul>
                        {members?.map((obj, ind) => (
                            <li className='connection_card'>
                                <div> {obj.name}</div>
                                <div> <RiDeleteBin6Line /> </div>
                            </li>
                        ))}
                    </ul>
                    <button className='btn_primary'>save</button>
                </div>
            </div>
        </Base>
    )
}

export default Connections