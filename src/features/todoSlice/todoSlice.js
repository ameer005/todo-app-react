import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addItem: (state, { payload }) => {
      state.todo.push(payload);
    },
    updateItem: (state, { payload }) => {
      state.todo.forEach((item) => {
        if (item.id === payload.id) item.completed = payload.completed;
      });
    },
    deleteItem: (state, { payload }) => {
      const afterDeleting = state.todo.filter((item) => !item.completed);

      state.todo = afterDeleting;
    },
  },
});

export const { addItem, updateItem, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
