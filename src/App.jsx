import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setNumber(random);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Random Number Generator</h1>

        <p>Generate a random number between 1 and 100</p>

        <div className="number-box">
          {number === null ? (
            <h2>No number generated yet</h2>
          ) : (
            <h2>{number}</h2>
          )}
        </div>

        <button onClick={generateNumber}>
          Generate Random Number
        </button>
      </div>
    </div>
  );
}

export default App;