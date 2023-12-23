import React from "react";
import "./App.css";
import Display from "./components/Display";
import State from "./context/State";
import { Controller } from "./components/Controller";

const App = () => {
  return (
    <div >
      <State>
          <Display />
          <Controller />
      </State>
    </div>
  );
};

export default App;

