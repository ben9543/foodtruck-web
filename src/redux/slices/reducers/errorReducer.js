const DEFAULT = "";
export const setErrorMsgReducer = (state, { payload }) => {
    state.message = payload.message;
    state.code = payload.code;
}