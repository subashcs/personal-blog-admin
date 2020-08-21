import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("process", process.env.NODE_ENV, process.env.PUBLIC_URL);

  return (
    <div className="App">
      apple is a fruit
      <img src={logo} />
    </div>
  );
}

export default App;
