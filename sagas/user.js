import { all, fork, put, delay, takeLatest, call } from 'redux-saga/effects';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CHECK_ID_REQUEST,
    CHECK_ID_SUCCESS,
    CHECK_ID_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
} from '../reducers/user';
import axios from '../util';
const logInAPI = data => {
    return axios.post('/user/auth', data);
}
const checkIdAPI = data => {
    return axios.get(`/user/${data}`);
}
const signUpAPI = data => {
    return axios.post(`/user/signup`, data.formData, data.config);
}
function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data);
        console.log(result);
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
function* checkId(action) {
    try {
        const result = yield call(checkIdAPI, action.data);
        yield put({
            type: CHECK_ID_SUCCESS,
            data: result.data
        });
    } catch (error) {
        yield put({
            type: CHECK_ID_FAILURE,
            error: error.response.data
        })
    }
}
function* signUp(action) {
    const result = yield call(signUpAPI, action.data);
    try {
        yield put({
            type: SIGN_UP_SUCCESS,
            data: result.data
        });
    } catch (error) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: error.response.data
        })
    }
}

function* watchLogIn() {
    yield takeLatest(LOGIN_REQUEST, logIn);
}
function* watchCheckId() {
    yield takeLatest(CHECK_ID_REQUEST, checkId);
}
function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}
export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchCheckId),
        fork(watchSignUp),
        // fork(watchLogOut),
    ])
}
