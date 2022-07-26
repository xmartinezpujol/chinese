import { createSelector, createSlice } from '@reduxjs/toolkit';
import { Hanzi } from '../../types/xpolore';
import { RootState } from '../store';

export interface HanziState {
  collection: Hanzi[];
  sentences: Hanzi[];
}

const initialState = {
  collection: [],
  sentences: [],
};

export const socketSlice = createSlice({
  name: 'hanzis',
  initialState,
  reducers: {
    setCollection: (state: HanziState, action) => {
      state.collection = action.payload;
    },
    setSentences: (state: HanziState, action) => {
      state.sentences = action.payload;
    },
  },
  extraReducers: {},
});

export const sortedByEnHanzis = createSelector(
  (state: RootState) => state.hanzis.collection,
  (hanzis) =>
    [...hanzis].sort((a, b) =>
      a?.translation?.en > b?.translation?.en ? 1 : -1
    )
);

export const { setCollection, setSentences } = socketSlice.actions;

export default socketSlice.reducer;
