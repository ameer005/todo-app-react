import React, { useState } from "react";
import "../styles/ListBox.scss";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteItem } from "../features/todoSlice/todoSlice";

const ListBox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.todo);
  const [allList, setAllList] = useState(true);
  const [completedList, setCompletedList] = useState(false);
  const [activeList, setActiveList] = useState(false);

  // BUILDING LIST
  const renderAllItems = () => {
    return data.map((item) => {
      return (
        <div key={item.id} className="item">
          <ListItem data={item} />
        </div>
      );
    });
  };

  const renderCompletedItem = () => {
    const completedItem = [];
    data.forEach((item) => {
      if (!item.completed) return;

      completedItem.push(item);
    });

    return completedItem.map((item) => {
      return (
        <div key={item.id} className="item">
          <ListItem data={item} />
        </div>
      );
    });
  };

  const renderActiveItem = () => {
    const activeItem = [];
    data.forEach((item) => {
      if (item.completed) return;

      activeItem.push(item);
    });

    return activeItem.map((item) => {
      return (
        <div key={item.id} className="item">
          <ListItem data={item} />
        </div>
      );
    });
  };

  // HANDELING BUTTON EVENTS
  const onAllBtn = () => {
    setAllList(true);
    setActiveList(false);
    setCompletedList(false);
  };

  const onActiveBtn = () => {
    setAllList(false);
    setActiveList(true);
    setCompletedList(false);
  };

  const onCompletedBtn = () => {
    setAllList(false);
    setActiveList(false);
    setCompletedList(true);
  };

  // RENDERING LIST FUNCTION

  const renderList = () => {
    if (allList) return renderAllItems();
    else if (activeList) return renderActiveItem();

    return renderCompletedItem();
  };

  // DELETING FUNCTIONALITY
  const onDelete = () => {
    dispatch(deleteItem());
  };

  console.log();

  return (
    <div className="list-container">
      <div className="list-box">
        {renderList().length ? (
          renderList()
        ) : (
          <div className="empty-text">There is no item...</div>
        )}
      </div>

      <footer className="footer">
        <div className="item-left">0 items left</div>
        <div className="btn-group">
          <button
            onClick={onAllBtn}
            className={`btn-sort ${allList ? "sort-active" : ""}`}
          >
            All
          </button>
          <button
            onClick={onActiveBtn}
            className={`btn-sort ${activeList ? "sort-active" : ""}`}
          >
            Active
          </button>
          <button
            onClick={onCompletedBtn}
            className={`btn-sort ${completedList ? "sort-active" : ""}`}
          >
            Completed
          </button>
        </div>
        <button onClick={onDelete} className="btn-delete">
          Clear Completed
        </button>
      </footer>
    </div>
  );
};

export default ListBox;
