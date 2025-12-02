import "./index.css";
import { props } from "./utils/props.js";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Card prop={props.japan} />
        <Card prop={props.australia} />
        <Card prop={props.england} />
      </main>
    </>
  );
}

export default App;
