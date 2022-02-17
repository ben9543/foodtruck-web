import { createSlice } from '@reduxjs/toolkit';
import { signInUserReducer, signUpUserReducer, signOutUserReducer} from "./reducers/userReducers";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      uid: "",
      email: "",
      loggedIn: false
    },
    reducers: {
        signInUser: signInUserReducer,
        signUpUser: signUpUserReducer,
        signOutUser: signOutUserReducer
    },
  })
  
  // Action creators are generated for each case reducer function
export const { signInUser, signUpUser, signOutUser } = userSlice.actions;
  
export default userSlice.reducer;