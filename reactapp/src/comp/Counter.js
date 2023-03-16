import React from "react";

function Counter({ name = "user" }) {
  return (
    <div>
    {name && <h1>hello {name}</h1>}
    </div>
  );
}

export default Counter;
