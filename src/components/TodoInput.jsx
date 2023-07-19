import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { v4 as uuid } from "uuid";
const TodoInput = () => {
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
            />
          </div>
          <button
            type="submit"
            className="btn text-capitalize  btn-block btn-primary"
          >
            add item
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoInput;
