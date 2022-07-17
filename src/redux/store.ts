import { configureStore } from '@reduxjs/toolkit';
import filters from './modules/filters';

const store = configureStore({
  reducer: {
    filters,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
