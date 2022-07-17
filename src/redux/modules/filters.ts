import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

export const socketSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.text = action.payload;
    },
  },
  extraReducers: {},
});

export const { setFilter } = socketSlice.actions;

export default socketSlice.reducer;
