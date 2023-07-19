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
  reducers: {},
});
export default todoSlice.reducer;
