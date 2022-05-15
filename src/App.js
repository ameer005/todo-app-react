import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ListBox from "./components/ListBox";

const App = () => {
  return (
    <div className="app light-theme">
      <Header />
      <InputTodo />
      <ListBox />
    </div>
  );
};

export default App;
