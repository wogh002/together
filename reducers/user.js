import produce from 'immer';
import { setCookie, TOKEN_NAME } from '../util/cookie';
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
            setCookie(TOKEN_NAME, action.data.headers.authorization, { path: "/" });
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
        default:
            break;
    }
})


export default reducer;