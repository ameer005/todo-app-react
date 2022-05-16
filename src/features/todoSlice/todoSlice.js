import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  theme: "dark-theme",
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
    deleteCompletedItems: (state, { payload }) => {
      const afterDeleting = state.todo.filter((item) => !item.completed);

      state.todo = afterDeleting;
    },
    deleteItem: (state, { payload }) => {
      const afterDeleting = state.todo.filter((item) => item.id !== payload.id);

      state.todo = afterDeleting;
    },
    updateTheme: (state, { payload }) => {
      console.log(payload);
      state.theme = payload;
    },
  },
});

export const {
  addItem,
  updateItem,
  deleteCompletedItems,
  deleteItem,
  updateTheme,
} = todoSlice.actions;
export default todoSlice.reducer;
