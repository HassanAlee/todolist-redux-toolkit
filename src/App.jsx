import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
const getLocalStorage = () => {
  return localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
};
const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-10 mx-auto mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
