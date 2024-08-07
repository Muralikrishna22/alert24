import React from "react";
import Base from "../../Common/Base";
import { FaCloudMoonRain } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { FaBed } from "react-icons/fa6";
import { GiTempleGate } from "react-icons/gi";

import { RiWindyLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { TbAirConditioning } from "react-icons/tb";
import './styles.css';
import TextInput from "../../Common/Base/TextInput";
import Button from "../../Common/Base/Button";

const CreateAddress = () => {
    return (
        <div className='address_container'>
            <span className='heading'>Address Creation</span>
            <div className='sub_menu'>
                <div className='item'>
                    <IoHomeOutline className="icon" />
                    <div>
                        Home
                    </div>
                </div>
                <div className='item'>
                    <BsBuildings className="icon" />
                    <div>
                        Apartment
                    </div>
                </div>
                <div className='item'>
                    <FaBed className="icon" />
                    <div>
                        Hotel
                    </div>
                </div>
                <div className='item'>
                    <GiTempleGate className="icon" />
                    <div>
                        Outdoor
                    </div>
                </div>
            </div>
            <div className='map_container'>
                <img style={{ width: '100%' }} src='https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png' alt='maps'/>
            </div>
            <div className='address_form'>
                <div className='form_container'>
                    <div className='label'>Search Your Location</div>
                    <TextInput placeholder="Address" />
                    <TextInput placeholder="Landmark" />
                    <TextInput placeholder="City" />
                    <TextInput placeholder="State" />
                    <TextInput placeholder="Pincode" />
                    <Button>Save</Button>
                </div>
            </div>
            <span className='heading'>Residential Details</span>
            <div className='address_form'>
                <div className='form_container'>
                    <TextInput placeholder="Resident Name" />
                    <div className='resi_flex'>
                    <TextInput placeholder="Resident No." />
                    <input type="text" className='resi_input' placeholder="Relate" />
                    </div>
                    <div className='resi_button'>
                        <Button>Add</Button>
                        <Button>Save</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AddressPage = () => (
    <Base>
        <CreateAddress />
    </Base>
);

export default AddressPage;