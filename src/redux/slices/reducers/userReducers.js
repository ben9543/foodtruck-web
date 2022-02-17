const DEFAULT = "";
export const signInUserReducer = (state, { payload }) => {
    state.uid = payload.uid;
    state.email = payload.email;
    state.loggedIn = true;
}

export const signUpUserReducer = (state, action) => {
    console.log(state, action)
}

export const signOutUserReducer = (state, action) => {
    state.uid = DEFAULT;
    state.email = DEFAULT;
    state.loggedIn = false;
}
