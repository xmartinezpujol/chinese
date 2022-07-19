import { createSlice } from '@reduxjs/toolkit';
import { Hanzi } from '../../types/xpolore';

export interface HanziState {
  collection: Hanzi[];
}

const initialState = {
  collection: [],
};

export const socketSlice = createSlice({
  name: 'hanzis',
  initialState,
  reducers: {
    setCollection: (state: HanziState, action) => {
      state.collection = action.payload;
    },
  },
  extraReducers: {},
});

export const { setCollection } = socketSlice.actions;

export default socketSlice.reducer;
