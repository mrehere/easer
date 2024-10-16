import "./Header.scss";
function Header({ title, subtitle }) {
  return (
    <>
      <header className="header">
        <h1 className="header__title">{title}</h1>
        <h4 className="header__subTitle">{subtitle}</h4>
      </header>
    </>
  );
}

export default Header;
