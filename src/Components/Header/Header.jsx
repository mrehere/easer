import "./Header.scss";
import logo from "../../../public/logo.png";
import { useNavigate } from "react-router-dom";
function Header({ title, subtitle }) {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/");
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
