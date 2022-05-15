import React from "react";
import "../styles/ListItem.scss";
import { updateItem, deleteItem } from "../features/todoSlice/todoSlice";
import { useDispatch } from "react-redux";

const ListItem = ({ data }) => {
  const disaptch = useDispatch();

  const completed = () => {
    disaptch(updateItem({ completed: true, id: data.id }));
  };

  const onDeleteItem = () => {
    disaptch(deleteItem({ id: data.id }));
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

      <svg
        onClick={onDeleteItem}
        className="icon-cross"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
      >
        <path
          fill="#494C6B"
          fillRule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </div>
  );
};

export default ListItem;
