import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userInput, addTodo } from "../features/todo/todoSlice";
const TodoInput = () => {
  const { text } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <>
      <div className="card card-body my-3">
        <form action="">
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary bg-primary text-white"
              type="button"
              id="button-addon1"
            >
              <BsBookmarkPlusFill />
            </button>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value={text}
              onChange={(e) => dispatch(userInput({ input: e.target.value }))}
            />
          </div>
          <button
            type="submit"
            className="btn text-capitalize  btn-block btn-primary"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addTodo({ id: uuidv4(), text: text }));
            }}
          >
            add item
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoInput;
