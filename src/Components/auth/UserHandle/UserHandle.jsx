import React, { useState } from "react";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import "./UserHandle.scss";
import logo from "../../../../public/logo.png";
function UserHandle() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between sign-in and sign-up

  const showLogin = () => {
    setIsLogin(true); // Show login form
  };

  const showSignup = () => {
    setIsLogin(false); // Show sign-up form
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
      </div>
    </div>
  );
}

export default UserHandle;
