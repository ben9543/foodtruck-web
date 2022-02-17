import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../redux/slices/counterSlice";
import userReducer from "../redux/slices/userSlice";

// This creates a Redux store, and also automatically configure 
// the Redux DevTools extension so that you can inspect the store while developing.

export default configureStore({
  reducer: {
      counter: counterReducer,
      user: userReducer
  },
})