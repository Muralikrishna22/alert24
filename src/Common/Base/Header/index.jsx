import React, { useEffect } from "react";
import "./styles.css";
import { FaUserCircle } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        navigate("/register");
      })
      .catch((error) => {
        console.log("An error happened on Sign-out.");
      });
  };

  useEffect(() => {
    let checkUserTimeout = setTimeout(() => {
      let loginRoutes = ["/login", "/register", "/sign-up"];
      if (!user && !loginRoutes.includes(location.pathname)) {
        navigate('/register')
      }else if(user && loginRoutes.includes(location.pathname)){
        navigate('/')
      }
    },1000);
    return () => {
      clearTimeout(checkUserTimeout)
    }
  }, [user]);

  return (
    <header className="header">
      <div className="logo">ALERT24</div>
      <div className="profileIcon">
        <FaUserCircle />{" "}
        {user && <button onClick={handleSignout}>Sign out</button>}
      </div>
    </header>
  );
};

export default Header;
