import produce from 'immer';
// produce 함수를 사용 할 때에는 
// 첫번째 파라미터 -> 수정하고 싶은 상태, 
// 두번째 파라미터 -> 어떻게 업데이트하고 싶을지 정의하는 함수를 넣어준다.
// https://react.vlpt.us/basic/23-immer.html
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const CHECK_ID_REQUEST = "CHECK_ID_REQUEST";
export const CHECK_ID_SUCCESS = "CHECK_ID_SUCCESS";
export const CHECK_ID_FAILURE = "CHECK_ID_FAILURE";
const initalState = {
    me: null,
    logInDone: false,
    logInError: null,
    signUpDone: false,
    signUpError: null,
    checkIdMessage: null,
    checkIdError: null,
}
const reducer = (state = initalState, action) => produce(state, draft => {
    switch (action.type) {
        case LOGIN_REQUEST:
            draft.me = null;
            draft.logInDone = false;
            draft.logInError = null;
            break;
        case LOGIN_SUCCESS:
            draft.me = action.data;
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
            // draft.checkIdMessage = action.data.status;
            draft.checkIdMessage = "ok";
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
        default:
            break;
    }
})


export default reducer;