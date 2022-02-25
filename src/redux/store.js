import { configureStore } from '@reduxjs/toolkit'
import errorReducer from "../redux/slices/errorSlice"
import userReducer from "../redux/slices/userSlice";
import loadingReducer from './slices/loadingSlice';

// This creates a Redux store, and also automatically configure 
// the Redux DevTools extension so that you can inspect the store while developing.

export default configureStore({
  reducer: {
      user: userReducer,
      error: errorReducer,
      loading: loadingReducer
  },
})