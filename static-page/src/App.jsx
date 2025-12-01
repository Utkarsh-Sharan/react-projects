import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <main className="main">
        <img src={reactLogo} alt="react-logo" width={100} />

        <h1 className="p-10">Fun facts about React!</h1>

        <ul className="p-10">
          <li>Was released in 2013</li>
          <li>Was originally created by John Walke</li>
          <li>Has well over 200k stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </>
  );
}

export default App;
