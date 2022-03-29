import { createSlice } from '@reduxjs/toolkit';
import { homePageReducer, mapPageReducer, authPageReducer, errorPageReducer, DEFAULT } from './reducers/pageReducers';

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        page: DEFAULT
    },
    reducers: {
        homePage: homePageReducer,
        mapPage: mapPageReducer,
        authPage: authPageReducer,
        errorPage: errorPageReducer
    },
  })
  
  // Action creators are generated for each case reducer function
export const { homePage, mapPage, authPage } = pageSlice.actions;
export default pageSlice.reducer;