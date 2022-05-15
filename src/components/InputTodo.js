import React, { useState } from "react";
import "../styles/InputTodo.scss";
import { v4 as uuidv4 } from "uuid";
import { addItem } from "../features/todoSlice/todoSlice";
import { useDispatch } from "react-redux";

const InputTodo = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!term) return;

    const userObject = {
      id: uuidv4(),
      completed: false,
      content: term,
    };

    dispatch(addItem(userObject));
    setTerm("");
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <button type="submit" className="form__btn"></button>
      <input
        type="text"
        className="form__input"
        placeholder="Create a new todo..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
};

export default InputTodo;
