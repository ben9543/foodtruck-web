const DEFAULT = "";
export const setLoadingReducer = (state, _) => {
    state.loading = true;
}
export const endLoadingReducer = (state, _) => {
    state.loading = false;
}
export const toggleLoadingReducer = (state, _) => {
    state.loading = !state.loading;
}