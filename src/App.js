import "./App.css";
import Home from "./components/home/Home";

function App() {
  const imie = "Tomasz";
  return (
    <div className="App">
      <Home tekst={imie} />
    </div>
  );
}

export default App;
