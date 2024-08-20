import React, { useState } from "react";
import "./styles.css";
import Base from "../../Common/Base";
import TextInput from "../../Common/Base/TextInput";
import Button from "../../Common/Base/Button";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { firebase, auth } from "../../firebase";

// Registration Form Component
const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [mynumber, setnumber] = useState("+916303582626");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  // Sent OTP
  const signin = () => {
    if (mynumber === "" || mynumber.length < 10) return;


    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(mynumber, verify)
      .then((result) => {
        setfinal(result);
        alert("code sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  return (
    <div style={{ marginTop: "200px" }}>
        <center>
            <div
                style={{
                    display: !show ? "block" : "none",
                }}
            >
                <input
                    value={mynumber}
                    onChange={(e) => {
                        setnumber(e.target.value);
                    }}
                    placeholder="phone number"
                />
                <br />
                <br />
                <div id="recaptcha-container"></div>
                <br />
                <button onClick={signin}>
                    Send OTP
                </button>
            </div>
            <div
                style={{
                    display: show ? "block" : "none",
                }}
            >
                <input
                    type="text"
                    placeholder={"Enter your OTP"}
                    onChange={(e) => {
                        setotp(e.target.value);
                    }}
                ></input>
                <br />
                <br />
                <button onClick={ValidateOtp}>
                    Verify
                </button>
            </div>
        </center>
    </div>
);

  return (
    <div className="container">
      <div className="formContainer">
        <FaUser className="avatar" />
        <form className="form">
          <TextInput placeholder="Contact No" onChange={(e) => {console.log(".....", e.target.value)}} />
          <TextInput placeholder="Email (Optional)" />
          <Button
            isDisabled={isLoggedIn}
            onClick={() => setIsLoggedIn((prev) => !prev)}
            type="button"
          >
            Login
          </Button>
        </form>
        <div>
          {isLoggedIn && (
            <>
              <TextInput placeholder="Enter OTP... " />
              <Button onClick={() => navigate("/home")} type="button">
                Verify
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const LoginPage = () => {
  return (
    <Base>
      <LoginForm />
    </Base>
  );
};

export default LoginPage;
