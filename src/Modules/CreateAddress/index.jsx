import React, { useState } from "react";
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

const Home_address = () => (
    <>
        <div className='address_form'>
            <div className='form_container'>
                <div className='label'>Search Your Location</div>
                <TextInput placeholder="H No./ Road No." />
                <TextInput placeholder="Landmark" />
                <TextInput placeholder="City/District" />
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
    </>
);

const Apartment_address = () => (
    <>
        <div className='address_form'>
            <div className='form_container'>
                <div className='label'>Search Your Location</div>
                <TextInput placeholder="Flat No./ Floor No./ Building Name" />
                <TextInput placeholder="Landmark" />
                <TextInput placeholder="City/District" />
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
    </>
);

const Hostel_address = () => (
    <>
        <div className='address_form'>
            <div className='form_container'>
                <div className='label'>Search Your Location</div>
                <TextInput placeholder="Room No./ Floor No./ Hostel Name" />
                <TextInput placeholder="Landmark" />
                <TextInput placeholder="City/District" />
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
    </>
);

const Outdoor_address = () => (
    <>
        <div className='address_form'>
            <div className='form_container'>
                <div className='label'>Search Your Location</div>
                <TextInput placeholder="Room No./ Floor No." />
                <TextInput placeholder="Stay Building Name" />
                <TextInput placeholder="City/District" />
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
    </>
);

const CreateAddress = () => {
    const [addressOption, setAddressOption] = useState({
        isHome: false,
        isApartment: false,
        isHotel: false,
        isOutdoor: false
    });

    return (
        <div className='address_container'>
            <span className='heading'>Address Creation</span>
            <div className='sub_menu'>
                <div className='item'>
                    <IoHomeOutline onClick={() => setAddressOption({
                        isHome: true,
                        isApartment: false,
                        isHotel: false,
                        isOutdoor: false
                    })} className="icon" />
                    <div>
                        Home
                    </div>
                </div>
                <div className='item'>
                    <BsBuildings onClick={() => setAddressOption({
                        isHome: false,
                        isApartment: true,
                        isHotel: false,
                        isOutdoor: false
                    })} className="icon" />
                    <div>
                        Apartment
                    </div>
                </div>
                <div className='item'>
                    <FaBed onClick={() => setAddressOption({
                        isHome: false,
                        isApartment: false,
                        isHotel: true,
                        isOutdoor: false
                    })} className="icon" />
                    <div>
                        Hotel
                    </div>
                </div>
                <div className='item'>
                    <GiTempleGate onClick={() => setAddressOption({
                        isHome: false,
                        isApartment: false,
                        isHotel: false,
                        isOutdoor: true
                    })} className="icon" />
                    <div>
                        Outdoor
                    </div>
                </div>
            </div>
            <div className='map_container'>
                <img style={{ width: '100%' }} src='https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png' alt='maps' />
            </div>
            {addressOption.isHome && <Home_address />}
            {addressOption.isApartment && <Apartment_address />}
            {addressOption.isHotel && <Hostel_address />}
            {addressOption.isOutdoor && <Outdoor_address />}
        </div>
    );
};

const AddressPage = () => (
    <Base>
        <CreateAddress />
    </Base>
);

export default AddressPage;