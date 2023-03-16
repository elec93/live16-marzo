import React, { useEffect, useState } from "react";

function HookCounter({ initValue = 0 }) {
  const [counter, setCounter] = useState(initValue);

  useEffect(() => {
    console.log("i have mounted")
    return () => {console.log("i am unmounted")}
  }, []);

  useEffect(() => {
    console.log(`the counter is now: ${counter}`);
    return () => {console.log({counter})
  }}, [counter]);

  function increment() {
    setCounter((prevState) => prevState + 1);
  }

  function reset() {
    setCounter(initValue);
  }

  return (
    <div>
      <h2>Counter:{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default HookCounter;
