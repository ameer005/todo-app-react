import React, { useState } from "react";
import "../styles/ListItem.scss";
import { updateItem } from "../features/todoSlice/todoSlice";
import { useDispatch } from "react-redux";

const ListItem = ({ data }) => {
  const disaptch = useDispatch();

  const completed = () => {
    disaptch(updateItem({ completed: true, id: data.id }));
  };

  return (
    <div className="list-item">
      <button
        onClick={completed}
        className={`list-item__btn ${data.completed ? "completed-btn" : ""}`}
      ></button>
      <p
        className={`list-item__text ${data.completed ? "completed-item" : ""}`}
      >
        {data.content}
      </p>
    </div>
  );
};

export default ListItem;
