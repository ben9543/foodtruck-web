import { createSlice } from '@reduxjs/toolkit';
import { setErrorMsgReducer } from "./reducers/errorReducer";

export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        code: null,
        message: ""
    },
    reducers: {
        setErrorMsg:setErrorMsgReducer
    },
  })
  
  // Action creators are generated for each case reducer function
export const { setErrorMsg } = errorSlice.actions;
  
export default errorSlice.reducer;