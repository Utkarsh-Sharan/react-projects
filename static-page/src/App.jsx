import reactLogo from "./assets/react.svg";
import "./App.css";
import Challenge from "./components/Challenge";

function App() {
  return (
    <>
      <Challenge />
      <main className="main">
        <img src={reactLogo} alt="react-logo" width={100} />

        <h1>Fun facts about React!</h1>

        <ul>
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
