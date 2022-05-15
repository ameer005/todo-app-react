import React, { useState } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ListBox from "./components/ListBox";

const App = () => {
  const [theme, setTheme] = useState("light-theme");

  const themeToggle = () => {
    setTheme((prev) => (prev === "light-theme" ? "dark-theme" : "light-theme"));
  };
  return (
    <div className={`container ${theme}`}>
      <div className="app">
        <Header themeToggle={themeToggle} theme={theme} />
        <InputTodo />
        <ListBox />
      </div>
    </div>
  );
};

export default App;
