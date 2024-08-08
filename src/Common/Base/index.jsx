import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './styles.css';

const Base = ({ children }) => {
    return (
        <div className="base_container">
            <Header />
            <div className="children">
            {children}
            </div>
            <Footer />
        </div>
    )
}

export default Base