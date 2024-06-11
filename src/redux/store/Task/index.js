import { createSlice, } from '@reduxjs/toolkit';


const initialState = {
  listTask: []
};

const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setListTask: (state, action) => {
      state.listTask = action.payload;
    },

  },
  extraReducers: builder => {

  },
});

export const { setListTask } = TaskSlice.actions;
export default TaskSlice.reducer;
