import { configureStore } from '@reduxjs/toolkit';
import PostSlice from './PostSlice';

const store = configureStore({
  reducer: {
    user: PostSlice,
  },
});

export default store;