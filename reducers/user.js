import produce from 'immer';
// produce 함수를 사용 할 때에는 
// 첫번째 파라미터 -> 수정하고 싶은 상태, 
// 두번째 파라미터 -> 어떻게 업데이트하고 싶을지 정의하는 함수를 넣어준다.
// https://react.vlpt.us/basic/23-immer.html
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
const initalState = {
    me: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
}
const reducer = (state = initalState, action) => produce(state, draft => {
    switch (action.type) {
        case LOGIN_REQUEST:
            draft.logInLoading = true;
            draft.logInDone = false;
            draft.logInError = null;
            break;
        case LOGIN_SUCCESS:
            draft.logInDone = true;
            draft.logInLoading = false;
            break;
        case LOGIN_FAILURE:
            draft.logInError = action.error;
            draft.logInLoading = false;
            break;
        default:
            break;
    }
})


export default reducer;