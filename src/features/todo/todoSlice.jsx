import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  text: "",
  todos: [
    // {
    //   id: 1,
    //   text: "do homework",
    // },
    // {
    //   id: 2,
    //   text: "learn something new",
    // },
    // {
    //   id: 3,
    //   text: "do code",
    // },
  ],
  isEditing: false,
  singleTodo: {},
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    userInput: (state, action) => {
      const input = action.payload.input;
      state.text = input;
    },
    addTodo: (state, action) => {
      const newTodo = action.payload;
      let todos = state.todos;
      todos = [...todos, newTodo];
      state.todos = todos;
      state.text = "";
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);
    },
    editTodo: (state, action) => {
      const id = action.payload;
      // state.todos = [...state.todos, id];
      // console.log(id);
      // console.log(state.todos.find((item) => item.id !== id)?.text);
      // state.text = state.todos.find((item) => item.id !== id)?.text;
      state.singleTodo = state.todos.find((item) => item.id == id);
      state.text = state.singleTodo.text;
      state.isEditing = true;
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id == action.payload.id) {
          return action.payload;
        }
        return item;
      });
      state.isEditing = false;
      state.singleTodo = {};
      state.text = "";
    },
    clearTodos: (state, action) => {
      state.todos = [];
    },
  },
});
export const {
  userInput,
  addTodo,
  removeTodo,
  editTodo,
  updateTodo,
  clearTodos,
} = todoSlice.actions;
export default todoSlice.reducer;
