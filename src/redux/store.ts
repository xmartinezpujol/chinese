import { configureStore } from '@reduxjs/toolkit';
import filters from './modules/filters';
import hanzis from './modules/hanzis';

const store = configureStore({
  reducer: {
    filters,
    hanzis,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
