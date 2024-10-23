import "./Header.scss";
import logo from "../../../public/logo.png";
function Header({ title, subtitle }) {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <img className="header__logo" src={logo} alt="logo" />
          <h1 className="header__title">{title}</h1>
        </div>
        <h4 className="header__subTitle">{subtitle}</h4>
      </header>
    </>
  );
}

export default Header;
