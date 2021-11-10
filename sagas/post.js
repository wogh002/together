// Tip: https://kyounghwan01.github.io/blog/React/redux/redux-saga/#%E1%84%8B%E1%85%B1-%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%8B%E1%85%B4-%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8E%E1%85%A6%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB-%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC-%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%BC
import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import {
  generateDummyPost,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  DETAIL_POST_REQUEST,
  DETAIL_POST_SUCCESS,
  DETAIL_POST_FAILURE,
} from "../reducers/post";
import { apis } from "../api/axios";

function loadPostsAPI() {
  return apis.getPost();
}

function* loadPosts() {
  try {
    const result = yield call(loadPostsAPI);
    console.log(result.data);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  console.log(data);
  return apis.addPost(data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    // const result = action.data;
    console.log(result);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function editPostAPI(data) {
  console.log(data);
  return apis.editPost(data);
}

function* editPost(action) {
  try {
    const result = yield call(editPostAPI, action.data);
    console.log(result);
    yield put({
      type: EDIT_POST_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: EDIT_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function detailPostAPI(data) {
  return apis.detailPost(data);
}

function* detailPost(action) {
  console.log(action.data);
  try {
    const result = yield call(detailPostAPI, action.data);
    console.log(result);
    yield put({
      type: DETAIL_POST_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: DETAIL_POST_FAILURE,
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

function* watchEditPost() {
  yield takeLatest(EDIT_POST_REQUEST, editPost);
}

function* watchDetailPost() {
  yield takeLatest(DETAIL_POST_REQUEST, detailPost);
}

export default function* userSaga() {
  yield all(
    [ 
      fork(watchAddPost),
      fork(watchLoadPosts),
      fork(watchEditPost),
      fork(watchDetailPost),
    ]
  );
}
