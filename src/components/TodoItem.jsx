import React from "react";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
const TodoItem = () => {
  return (
    <li
      className="list-group-item text-capitalize d-flex
    justify-content-between my-2"
    >
      <h6>item here</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success">
          <MdEdit />
        </span>
        <span className="mx-2 text-danger">
          <FaTrash />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
