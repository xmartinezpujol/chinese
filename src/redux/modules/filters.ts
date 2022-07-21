import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
  context: {
    mode: null,
    category: {
      value: 'restaurant',
      label: 'Restaurant',
    },
  },
};

export const socketSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.text = action.payload;
    },
    setContext: (state, action) => {
      state.context = action.payload;
    },
  },
  extraReducers: {},
});

export const { setFilter, setContext } = socketSlice.actions;

export default socketSlice.reducer;
