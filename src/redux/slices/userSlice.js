import { createSlice } from '@reduxjs/toolkit';
import { signInUserReducer, signInFoodTruckReducer, signUpUserReducer, signOutUserReducer} from "./reducers/userReducers";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      uid: "",
      email: "",
      foodTruck: false,
      truckName: "",
      closeAt: 0,
      loggedIn: false
    },
    reducers: {
        signInUser: signInUserReducer,
        signUpUser: signUpUserReducer,
        signOutUser: signOutUserReducer,
        signInFoodTruck: signInFoodTruckReducer
    },
  })
  
  // Action creators are generated for each case reducer function
export const { signInUser, signUpUser, signOutUser, signInFoodTruck } = userSlice.actions;
  
export default userSlice.reducer;