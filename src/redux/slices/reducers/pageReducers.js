export const DEFAULT = "home";
export const homePageReducer = (state, _) => {
    state.page = "home";
}
export const mapPageReducer = (state, _) => {
    state.page = "map";
}
export const authPageReducer = (state, _) => {
    state.page = "auth";
}
export const errorPageReducer = (state, _) => {
    state.page = "error";
}
export const setPageToDefaultReducer = (state, _) => {
    state.page = DEFAULT;
}