const DEFAULT = "";
export const setErrorReducer = (state, { payload }) => {
    state.errorCode = payload.errorCode;
    state.errorMessage = payload.errorMessage;
}
export const removeErrorReducer = (state, { payload }) => {
    state.errorCode = null;
    state.errorMessage = null
}