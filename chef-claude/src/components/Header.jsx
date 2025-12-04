import chefLogo from "../assets/chef-logo.png"

function Header() {
  return (
    <header className="header">
      <img src={chefLogo} alt="chef-logo" />
      <h1>Chef Claude</h1>
    </header>
  );
}

export default Header;
