import React from "react";
import './styles.css';
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
    return (
      <header className="header">
        <div className="logo">ALERT24</div>
        <div className="profileIcon"><FaUserCircle /></div>
      </header>
    );
  };
  

export default Header;