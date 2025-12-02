import "./index.css"
import props from "./utils/props.js";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Card prop={props.japan} />
        <Card />
        <Card />
      </main>
    </>
  );
}

export default App;
