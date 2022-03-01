import { createSlice } from '@reduxjs/toolkit';

import {setErrorReducer,removeErrorReducer } from "./reducers/errorReducers";

export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        errorCode: null,
        errorMessage: null,
        errorCounter: 0
    },
    reducers: {
        setError: setErrorReducer,
        removeError: removeErrorReducer
    },
  })
  
  // Action creators are generated for each case reducer function
export const { setError, removeError } = errorSlice.actions;
export default errorSlice.reducer;