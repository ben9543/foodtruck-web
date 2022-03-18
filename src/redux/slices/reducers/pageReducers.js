const DEFAULT = "home";
export const setPageToHomeReducer = (state, _) => {
    state.page = "home";
}
export const setPageToMapReducer = (state, _) => {
    state.page = "map";
}
export const setPageToReviewReducer = (state, _) => {
    state.page = "review";
}
export const setPageToDefaultReducer = (state, _) => {
    state.page = DEFAULT;
}