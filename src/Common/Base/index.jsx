import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Base = ({children}) => {
    return (
        <div className="base_container">
            <Header />
           {children}
            <Footer />
        </div>
    )
}

export default Base