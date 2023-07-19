import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      <TodoItem />
      <button
        type="btn"
        className="btn btn-block btn-danger fw-bold text-capitalize mt-5"
      >
        clear list
      </button>
    </ul>
  );
};

export default TodoList;
