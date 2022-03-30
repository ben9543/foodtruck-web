const HOME = "home";
const MAP = "map";
const AUTH = "auth";
const ERROR = "error";
const DEFAULT = HOME;
export const pageConfig = {
    home: HOME,
    map: MAP,
    auth: AUTH,
    error: ERROR,
    default: DEFAULT
}
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