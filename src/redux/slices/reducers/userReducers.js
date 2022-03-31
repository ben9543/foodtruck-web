const DEFAULT = "";
export const signInUserReducer = (state, { payload }) => {
    state.uid = payload.uid;
    state.email = payload.email;
    state.loggedIn = true;
    state.foodTruck = false;
}
export const signInFoodTruckReducer = (state, { payload }) => {
    state.uid = payload.uid;
    state.email = payload.email;
    state.closeAt = payload.closeAt;
    state.truckName = payload.truckName;
    state.info = payload.info;
    state.loggedIn = true;
    state.foodTruck = true;
    state.truckIsOnline = true;
}
export const signUpUserReducer = (state, action) => {
    console.log(state, action)
}

export const signOutUserReducer = (state, action) => {
    state.uid = DEFAULT;
    state.email = DEFAULT;
    state.loggedIn = false;
    state.truckIsOnline = false;
}
