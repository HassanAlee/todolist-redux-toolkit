import React from "react";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
const TodoItem = ({ id, text }) => {
  const dispatch = useDispatch();
  return (
    <li
      className="list-group-item text-capitalize d-flex
    justify-content-between my-2"
    >
      <h6>{text}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success">
          <MdEdit />
        </span>
        <span className="mx-2 text-danger">
          <FaTrash onClick={() => dispatch(removeTodo({ id }))} />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
