// Tip: https://kyounghwan01.github.io/blog/React/redux/redux-saga/#%E1%84%8B%E1%85%B1-%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8B%E1%85%B4-%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB-%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC-%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%BC
import { all, fork, put, delay, takeLatest, call } from 'redux-saga/effects';
import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
} from '../reducers/user';
import axios from '../util';
const logInAPI = data => {
    return axios.post('/user/login', data);
}
function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOGIN_SUCCESS,
            data: result.data
        });
    } catch (error) {
        yield put({
            type: LOGIN_FAILURE,
            error: error.response.data
        })
    }
}
function* watchLogIn() {
    yield takeLatest(LOGIN_REQUEST, logIn);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        // fork(watchLogOut),
    ])
}
