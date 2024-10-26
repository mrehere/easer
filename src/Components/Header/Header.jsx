import "./Header.scss";
import logo from "../../../public/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../auth/firebase";
function Header({ title, subtitle }) {
  const navigate = useNavigate();
  // ------- authentication check ----------
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
        console.log(user.uid);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);
  const handleLogo = () => {
    authUser ? navigate("/") : navigate("/guest/home");
  };
  return (
    <>
      <header className="header">
        <div className="header__container">
          <img
            onClick={() => handleLogo()}
            className="header__logo"
            src={logo}
            alt="logo"
          />
          <h1 className="header__title">{title}</h1>
        </div>
        <h4 className="header__subTitle">{subtitle}</h4>
      </header>
    </>
  );
}

export default Header;
