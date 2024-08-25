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
import { addAddress } from "../../ApiServices";

const saveAddress = (addressType) => {
    console.log('address type', addressType)
    const pincode = document.getElementById("pincode")?.value
    // console.log('pincode', pincode.value)
    const road = document.getElementById("road")?.value
    const landmark = document.getElementById("landmark")?.value
    const district = document.getElementById("district")?.value
    const state = document.getElementById("state")?.value
    
    const buildingName = document.getElementById("buildingName")?.value
    const roomNumber = document.getElementById("roomNumber")?.value

    console.log('pincode', pincode)
    const data = {
        addressType,
        landmark,
        district, // required
        state, // required
        pincode: Number(pincode), //required 
        latitude: 0,
        longitude: 0, 
        houseNumber: "33A",
        roadNumber: road,
        flatNumber: "A1",
        floorNumber: "A",
        roomNumber,
        buildingName,
    }
    
    addAddress(data)
    .then((res) => res.json())
    .then(res => console.log('address added successfully', res))
    .catch(err => console.error('error adding address', err))
}

const Home_address = () => (
    <>
        <div className='address_form'>
            <div className='form_container'>
                <div className='label'>Search Your Location</div>
                <TextInput placeholder="H No./ Road No." id="road" />
                <TextInput placeholder="Landmark" id="landmark" />
                <TextInput placeholder="City/District" id="district" />
                <TextInput placeholder="State" id="state" />
                <TextInput placeholder="Pincode" id="pincode" />
                <Button onClick={() => saveAddress('home')}>Save</Button>
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
                <TextInput placeholder="Flat No./ Floor No./ Building Name" id="buildingName" />
                <TextInput placeholder="Landmark" id="landmark" />
                <TextInput placeholder="City/District" id="district" />
                <TextInput placeholder="State" id="state" />
                <TextInput placeholder="Pincode" id="pincode" />
                <Button onClick={() => saveAddress('apartment')}>Save</Button>
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
                <TextInput placeholder="Room No./ Floor No./ Hostel Name" id="roomNumber" />
                <TextInput placeholder="Landmark" id="landmark" />
                <TextInput placeholder="City/District" id="district" />
                <TextInput placeholder="State" id="state" />
                <TextInput placeholder="Pincode" id="pincode" />
                <Button onClick={() => saveAddress('hostel')}>Save</Button>
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
                <TextInput placeholder="Room No./ Floor No." id="roomNumber" />
                <TextInput placeholder="Stay Building Name" id="buildingName" />
                <TextInput placeholder="Landmark" id="landmark" />
                <TextInput placeholder="City/District" id="district" />
                <TextInput placeholder="State" id="state" />
                <TextInput placeholder="Pincode" id="pincode" />
                <Button onClick={() => saveAddress('outdoor')}>Save</Button>
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