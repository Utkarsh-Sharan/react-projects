import reactLogo from "../assets/react.svg";
import "../index.css";

function Header() {
  return (
    <header className="header">
      <img src={reactLogo} alt="react-logo" />
      <h1>ReactFacts</h1>
    </header>
  );
}

export default Header;
