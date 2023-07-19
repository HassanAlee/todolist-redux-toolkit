import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  text: "",
  todos: [
    {
      id: 1,
      text: "do homework",
    },
    {
      id: 2,
      text: "learn something new",
    },
    {
      id: 3,
      text: "do code",
    },
  ],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    userInput: (state, action) => {
      const input = action.payload.input;
      state.text = input;
    },
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.todos = [...state.todos, newTodo];
      state.text = "";
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});
export const { userInput, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
