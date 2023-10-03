import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearTodos } from "../features/todo/todoSlice";
const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {todos.map((item) => {
        return <TodoItem key={item.id} {...item} />;
      })}
      <button
        type="btn"
        className="btn btn-block btn-danger fw-bold text-capitalize mt-5"
        onClick={() => dispatch(clearTodos())}
      >
        clear list
      </button>
    </ul>
  );
};

export default TodoList;
