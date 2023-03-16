import React, { useState } from "react";

function Login() {
  const [stateInput, setInput] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInput(event) {
    const { name, type, value, checked } = event.target;
    setInput((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleInput}
          name="username"
          type="text"
          value={stateInput.username}
        ></input>
        <input
          onChange={handleInput}
          name="password"
          type="password"
          value={stateInput.password}
        ></input>
        <input
          onChange={handleInput}
          name="remember"
          type="checkbox"
          checked={stateInput.remember}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
