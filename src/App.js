import React, { useEffect, useState } from "react";
import ButtonComponent from "./Components/ButtonComponent";
import DisplayContent from "./Components/DisplayContent";
import "./Styles/App.css";

function App() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [m, setM] = useState(0);
  const [h, setH] = useState(0);
  const [s, setS] = useState(0);
  const [ms, setMs] = useState(0);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  let stopVal = "STOP";
  /*STATUS
    Can not be started = -1
     Not started = 0
     started = 1
     stopped = 2 */

  if (status === 1) {
    stopVal = "STOP";
  } else if (status === 2) {
    stopVal = "RESUME";
  }

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedH = h,
    updatedM = m,
    updatedS = s,
    updatedMs = ms;

  //TOO MANY RE-RENDERS!!!!!!!!!!!!!
  // if (h === 0 && m === 0 && s === 0 && ms === 0) {
  //   setDisabled(true);
  // }
  // if (status !== 0) {
  //   setDisabled(true);
  // }

  const run = () => {
    if (updatedM === 0) {
      updatedH--;
      updatedM = 59;
    }
    if (updatedS === 0) {
      updatedM--;
      updatedS = 59;
    }
    if (updatedMs === 0) {
      updatedS--;
      updatedMs = 100;
    }
    if (updatedH === 0 && updatedM === 0 && updatedS === 0 && updatedMs === 0) {
      setStatus(-1);
    }

    updatedMs--;
    return setH(updatedH), setM(updatedM), setS(updatedS), setMs(updatedMs);
  };

  const stop = () => {
    if (stopVal === "STOP") {
      clearInterval(interv);
      setStatus(2);
    } else if (stopVal === "RESUME") {
      start();
    }
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setH(0);
    setM(0);
    setS(0);
    setMs(0);
  };

  const handleHour = (e) => {
    setH(e.target.value);
  };

  const handleMin = (e) => {
    setM(e.target.value);
  };

  const handleSec = (e) => {
    setS(e.target.value);
  };

  return (
    <div className="app">
      <h2>COUNTDOWN TIMER</h2>
      <DisplayContent
        h={h}
        m={m}
        s={s}
        setH={handleHour}
        setM={handleMin}
        setS={handleSec}
        status={status}
        key={1}
      />
      <ButtonComponent
        reset={reset}
        start={start}
        status={status}
        stopVal={stopVal}
        stop={stop}
        key={2}
      />
    </div>
  );
}

export default App;
