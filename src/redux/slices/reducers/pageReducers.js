const HOME = "home";
const MAP = "map";
const AUTH = "auth";
const ERROR = "error";
const ABOUT = "about";
const CONTACT = "contact";
const DEFAULT = HOME;
export const pageConfig = {
    home: HOME,
    map: MAP,
    auth: AUTH,
    error: ERROR,
    about: ABOUT,
    contact: CONTACT,
    default: DEFAULT
}
export const homePageReducer = (state, _) => {
    state.page = HOME;
}
export const mapPageReducer = (state, _) => {
    state.page = MAP;
}
export const authPageReducer = (state, _) => {
    state.page = AUTH;
}
export const errorPageReducer = (state, _) => {
    state.page = ERROR;
}
export const aboutPageReducer = (state, _) => {
    state.page = ABOUT;
}
export const contactPageReducer = (state, _) => {
    state.page = CONTACT;
}
export const setPageToDefaultReducer = (state, _) => {
    state.page = DEFAULT;
}