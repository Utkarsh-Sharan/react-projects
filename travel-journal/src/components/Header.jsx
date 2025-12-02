import "../index.css";
import reactLogo from "../assets/react.svg";

function Header() {
  return (
    <>
      <header className="header">
        <img src={reactLogo} alt="logo" />
        <h3>my travel journal.</h3>
      </header>
    </>
  );
}

export default Header;
