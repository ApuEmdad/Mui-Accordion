import logo from "./logo.svg";
import "./App.css";
import MuIAccordion from "./components/MuIAccordion";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <MuIAccordion />
      </div>
    </div>
  );
}

export default App;
