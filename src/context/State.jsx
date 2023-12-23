import React, { useState } from "react";
import Context from "./Context";

const State = (props) => {
  const [group, setGroup] = useState("status");
  const [order, setOrder] = useState("priority");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Context.Provider value={{ group, setGroup, order, setOrder, isDarkMode, toggleDarkMode }}>
      {props.children}
    </Context.Provider>
  );
};

export default State;
