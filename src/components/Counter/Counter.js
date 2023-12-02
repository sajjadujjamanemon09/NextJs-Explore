"use client";

import { useState } from "react";

const Counter = () => {

  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-primary"
      >
        Increase
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="btn btn-neutral"
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
