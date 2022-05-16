import React, { useState } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ListBox from "./components/ListBox";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateTheme } from "./features/todoSlice/todoSlice";

const App = () => {
  const themeName = useSelector((state) => state.todo.theme);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(themeName);

  const themeToggle = () => {
    setTheme((prev) => (prev === "light-theme" ? "dark-theme" : "light-theme"));

    dispatch(
      updateTheme(theme === "dark-theme" ? "light-theme" : "dark-theme")
    );
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
