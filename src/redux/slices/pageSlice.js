import { createSlice } from '@reduxjs/toolkit';
import { homePageReducer, mapPageReducer, authPageReducer, errorPageReducer, pageConfig, aboutPageReducer, contactPageReducer } from './reducers/pageReducers';

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        page: pageConfig.default
    },
    reducers: {
        homePage: homePageReducer,
        mapPage: mapPageReducer,
        authPage: authPageReducer,
        errorPage: errorPageReducer,
        aboutPage: aboutPageReducer,
        contactPage: contactPageReducer,
        defaultPage: homePageReducer
    },
  })
  
  // Action creators are generated for each case reducer function
export const { homePage, mapPage, authPage, errorPage, defaultPage } = pageSlice.actions;
export default pageSlice.reducer;