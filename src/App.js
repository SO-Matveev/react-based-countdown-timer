import React from "react";
import "./App.css";
import { useState } from "react";
import { getPadTime } from "./helpers/getPadTime";

function App() {
  const [timeLeft, setTimeLeft] = useState(1 * 60);
  const hours = getPadTime(Math.floor(timeLeft / 60));
  const minutes = getPadTime(timeLeft - hours * 60);
  const seconds = getPadTime(timeLeft - (hours - minutes * 60) * 60);

  return (
    <div className="app">
      <div className="timer">
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
