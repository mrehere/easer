import React, { useState } from "react";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import "./UserHandle.scss";
import logo from "../../../../public/logo.png";
import { useNavigate } from "react-router-dom";

function UserHandle() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const showLogin = () => {
    setIsLogin(true); // Show login form
  };

  const showSignup = () => {
    setIsLogin(false); // Show sign-up form
  };

  const handleGuest = () => {
    navigate("/guest/home");
  };

  return (
    <div className="userHandle">
      <div className="userHandle__container">
        <div className="userHandle__headerContainer">
          <img src={logo} alt="" className="userHandle__logo" />
          <h1 className="userHandle__header">easer</h1>
        </div>
        <div className="userHandle__buttonContainer">
          {/* Log in button */}
          <button
            className={`userHandle__signin ${isLogin ? "active" : ""}`}
            onClick={showLogin}
          >
            Log in
          </button>
          {/* Sign up button */}
          <button
            className={`userHandle__signup ${!isLogin ? "active" : ""}`}
            onClick={showSignup}
          >
            Sign up
          </button>
        </div>

        {/* Form toggle */}
        {isLogin ? <Signin /> : <Signup />}

        <button className="userHandle__guest" onClick={handleGuest}>
          Guest Log in
        </button>
      </div>
    </div>
  );
}

export default UserHandle;
