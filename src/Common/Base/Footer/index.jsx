import React from "react";
import './styles.css';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();
    return (
      <footer className="footer">
        <button className="footerButton" onClick={() => navigate('/')}><IoHomeOutline /></button>
        <button onClick={() => navigate(-1)} className="footerButton"><MdOutlineArrowBackIos /></button>
      </footer>
    );
  };

  export default Footer;