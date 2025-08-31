import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  function addValue(statement) {
    if (statement == "+") {
      setCounter(counter + 1);
    } else if (statement == "-" && counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Anonymouse CSC</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={() => addValue("+")}>Add Value</button>
      <br />
      <button onClick={() => addValue("-")}>Remove Value</button>
      <p></p>
    </>
  );
}
