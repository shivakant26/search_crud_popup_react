import { configureStore } from '@reduxjs/toolkit';
import PostSlice from './PostSlice';
import FormSlice from './FormSlice';

const store = configureStore({
  reducer: {
    user: PostSlice,
    form: FormSlice,
  },
});

export default store;