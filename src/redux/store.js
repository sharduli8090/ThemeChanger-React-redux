import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
