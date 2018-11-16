import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import YanProgress from "./YanProgress";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <YanProgress total={100} done={60} modify={30} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
