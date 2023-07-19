import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
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
