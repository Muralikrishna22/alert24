import React, { useEffect, useState } from "react";
import "./styles.css";
import Base from "../../Common/Base";
import TextInput from "../../Common/Base/TextInput";
import Button from "../../Common/Base/Button";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { healthCheck, verifyToken } from "../../ApiServices";

// Registration Form Component
const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [verifyOTP, setVerifyOTP] = useState(false);
  const [final, setfinal] = useState(null);

  const signin = () => {
    if (!auth) {
      console.error("Firebase auth not initialized");
      return;
    }

    if (mynumber === "" || mynumber.length < 10) return;

    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          console.log("recaptcha resolved..");
        },
      }
    );

    signInWithPhoneNumber(auth, `+91${mynumber}`, recaptchaVerifier)
      .then((confirmationResult) => {
        setfinal(confirmationResult);
        console.log("OTP sent");
        setVerifyOTP(true);
      })
      .catch((error) => {
        console.log(error.message);
        window.location.reload();
      });
  };

  const ValidateOtp = () => {
    if (otp === "" || final === null) return;

    final
      .confirm(otp)
      .then((result) => {
        console.log("User signed in successfully", result.user);
        return result.user
      })
      .then((user) => {
        verifyToken(user.accessToken)
        setIsLoggedIn(true);
        navigate("/"); // Change route as needed
      })
      .catch((error) => {
        console.log("Invalid OTP, please try again.");
      });

      // healthCheck()
  };

  // return (
  //   <div style={{ marginTop: "200px" }}>
  //     <center>
  //       <div style={{ display: !show ? "block" : "none" }}>
  //         <input
  //           value={mynumber}
  //           onChange={(e) => setnumber(e.target.value)}
  //           placeholder="Phone Number"
  //         />
  //         <br /><br />
  //         <div id="recaptcha-container"></div>
  //         <br />
  //         <button onClick={signin}>
  //           Send OTP
  //         </button>
  //       </div>
  //       <div style={{ display: show ? "block" : "none" }}>
  //         <input
  //           type="text"
  //           placeholder={"Enter your OTP"}
  //           onChange={(e) => setotp(e.target.value)}
  //         />
  //         <br /><br />
  //         <button onClick={ValidateOtp}>
  //           Verify
  //         </button>
  //       </div>
  //     </center>
  //   </div>
  // );

  return (
    <div className="container">
      <div className="formContainer">
        <FaUser className="avatar" />
        <form className="form">
          <TextInput
            placeholder="Contact No"
            onChange={(e) => setnumber(e.target.value)}
          />
          <div id="recaptcha-container"></div>
          {/* <TextInput placeholder="Email (Optional)" /> */}
          {!verifyOTP ? (
            <Button isDisabled={isLoggedIn} onClick={signin} type="button">
              Login
            </Button>
          ) : (
            <div>
              <TextInput
                placeholder="Enter OTP... "
                onChange={(e) => setotp(e.target.value)}
              />
              <Button onClick={ValidateOtp} type="button">
                Verify
              </Button>
            </div>
          )}
        </form>
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
