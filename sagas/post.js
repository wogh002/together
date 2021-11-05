// Tip: https://kyounghwan01.github.io/blog/React/redux/redux-saga/#%E1%84%8B%E1%85%B1-%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8B%E1%85%B4-%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB-%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC-%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%BC
import { all, fork, put, delay, takeLatest, call } from "redux-saga/effects";
import {
  generateDummyPost,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
} from "../reducers/post";
import { apis } from "../api/axios";

function loadPostsAPI() {
  return apis.getPost();
}

function* loadPosts() {
  try {
    console.log('LOAD_POSTS_REQUEST 받고 saga도착')
    const result = yield call(loadPostsAPI);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}
// 
function addPostsAPI(a) {
  return apis.addPost(a);
}

function* addPost(action) {
  try {
    console.log('ADD_POSTS_REQUEST 받고 saga도착')
    console.log(action.data); // text
    const result = yield call(addPostsAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* userSaga() {
  yield all([fork(watchAddPost), fork(watchLoadPosts)]);
}
