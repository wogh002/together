import produce from 'immer';
import {NAME} from '../util/user';
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const CHECK_ID_REQUEST = "CHECK_ID_REQUEST";
export const CHECK_ID_SUCCESS = "CHECK_ID_SUCCESS";
export const CHECK_ID_FAILURE = "CHECK_ID_FAILURE";
export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
const initalState = {
    me: null,
    logInMessage: null,
    logInDone: false,
    logInError: null,
    signUpDone: false,
    signUpError: null,
    checkIdMessage: null,
    checkIdError: null,
    loadUserDone: false,
    loadUserError: null,
    logOutDone: false,
    logOutError: null,
}
const reducer = (state = initalState, action) => produce(state, draft => {
    switch (action.type) {
        case LOGIN_REQUEST:
            draft.me = null;
            draft.logInMessage = null;
            draft.logInDone = false;
            draft.logInError = null;
            break;
        case LOGIN_SUCCESS:
            draft.me = {
                ...action.data,
            };
            localStorage.setItem(NAME, action.data.headers.authorization);
            draft.logInMessage = action.data.message;
            draft.logInDone = true;
            break;
        case LOGIN_FAILURE:
            draft.logInError = action.error;
            break;
        case CHECK_ID_REQUEST:
            draft.checkIdMessage = null;
            draft.checkIdError = null;
            break;
        case CHECK_ID_SUCCESS:
            draft.checkIdMessage = action.data.message;
            break;
        case CHECK_ID_FAILURE:
            draft.checkIdError = action.error;
            break;
        case SIGN_UP_REQUEST:
            draft.signUpDone = false;
            draft.signUpError = null;
            break;
        case SIGN_UP_SUCCESS:
            draft.signUpDone = true;
            break;
        case SIGN_UP_FAILURE:
            draft.signUpError = action.error;
            break;
        case LOAD_USER_REQUEST:
            draft.loadUserDone = false;
            draft.loadUserError = null;
            break;
        case LOAD_USER_SUCCESS:
            draft.me = action.data;
            draft.loadUserDone = true;
            break;
        case LOAD_USER_FAILURE:
            draft.loadUserError = action.error;
            break;
        case LOGOUT_REQUEST:
            draft.logOutDone = false;
            draft.logOutError = null;
            break;
        case LOGOUT_SUCCESS:
            draft.me = null;
            localStorage.removeItem(NAME);
            draft.logOutDone = true;
            break;
        case LOGOUT_FAILURE:
            draft.logOutError = action.error;
            break;
        default:
            break;
    }
})


export default reducer;