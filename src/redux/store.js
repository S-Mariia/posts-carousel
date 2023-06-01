import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './slice';

export const store = configureStore({
  reducer: postsReducer,
});
