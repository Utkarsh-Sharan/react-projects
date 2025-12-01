import reactLogo from "../assets/react.svg";
import "../index.css";

function Header() {
  return (
    <header className="header">
      <img src={reactLogo} alt="react-logo" />
      <nav>
        <ul className="nav-list">
          <li>Home</li>
          <li>Products</li>
          <li>About us</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
