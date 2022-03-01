import { createSlice } from '@reduxjs/toolkit';
import {setErrorReducer,removeErrorReducer } from "./reducers/errorReducers";
import { endLoadingReducer, setLoadingReducer, toggleLoadingReducer } from './reducers/loadingReducers';

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        loading: true
    },
    reducers: {
        setLoading: setLoadingReducer,
        endLoading: endLoadingReducer,
        toggleLoading: toggleLoadingReducer
    },
  })
  
  // Action creators are generated for each case reducer function
export const { setLoading, endLoading, toggleLoading } = loadingSlice.actions;
export default loadingSlice.reducer;