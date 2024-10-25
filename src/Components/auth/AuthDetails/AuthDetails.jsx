import React, { useEffect, useState } from "react";
import "./AuthDetails.scss";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logout from "../../../assets/icons/logout.svg";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log(`signed out successfully`);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {authUser ? (
        <>
          {/* <p>{`Signed in as ${authUser.email}`}</p> */}
          <button className="logoutContainer" onClick={userSignOut}>
            <img src={logout} alt="" />
          </button>{" "}
        </>
      ) : (
        <p>Signed out</p>
      )}
    </div>
  );
};

export default AuthDetails;
