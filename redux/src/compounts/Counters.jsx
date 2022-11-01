import React from "react";
import {UseState} from "react"

function Counters() {
  const [count, setcount] = UseState(1);
  const handleInc = () => {
    setcount(count + 1);
  };
  const handleDec = () => {
    setcount(count - 1);
  };
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </div>
  );
}

export default Counters;
