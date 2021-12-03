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
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  LOAD_POSTS_CITY_REQUEST,
  LOAD_POSTS_CITY_SUCCESS,
  LOAD_POSTS_CITY_FAILURE,
  LOAD_POSTS_CITY_GU_REQUEST,
  LOAD_POSTS_CITY_GU_SUCCESS,
  LOAD_POSTS_CITY_GU_FAILURE,
} from "../reducers/post";
import { apis } from "../api/axios";

function loadPostsAPI(data) {
  return apis.getPost(data);
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.data);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: err.response,
    });
  }
}

function addPostAPI(data) {
  return apis.addPost(data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    // const result = action.data;
    yield put({
      type: ADD_POST_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function editPostAPI(data) {
  return apis.editPost(data);
}

function* editPost(action) {
  try {
    const result = yield call(editPostAPI, action.data);
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
  try {
    const result = yield call(detailPostAPI, action.data);
    yield put({
      type: DETAIL_POST_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: DETAIL_POST_FAILURE,
      data: err.response.data,
    });
  }
}


function deletePostAPI(data) {
  return apis.deletePost(data);
}

function* deletePost(action) {
  try {
    const result = yield call(deletePostAPI, action.data);
    yield put({
      type: DELETE_POST_SUCCESS,
      data: result.data.postId,
    });
  } catch (err) {
    yield put({
      type: DELETE_POST_FAILURE,
      data: err.response.data,
    });
  }
}
function loadPostsCityAPI(data) {
  return apis.loadPostsCity(data);
}

function* loadPostsCity(action) {
  try {
    const result = yield call(loadPostsCityAPI, action.data);
    yield put({
      type: LOAD_POSTS_CITY_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_CITY_FAILURE,
      data: err.response.data,
    });
  }
}
function loadPostsCityAndGuAPI(data) {
  return apis.loadPostsCityAndGu(data);
}

function* loadPostsCityAndGu(action) {
  try {
    const result = yield call(loadPostsCityAndGuAPI, action.data);
    yield put({
      type: LOAD_POSTS_CITY_GU_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_CITY_GU_FAILURE,
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

function* watchDeletePost() {
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
}
function* watchLoadPostsCity() {
  yield takeLatest(LOAD_POSTS_CITY_REQUEST, loadPostsCity);
}
function* watchLoadPostsCityAndGu() {
  yield takeLatest(LOAD_POSTS_CITY_GU_REQUEST, loadPostsCityAndGu);
}

export default function* userSaga() {
  yield all(
    [
      fork(watchAddPost),
      fork(watchLoadPosts),
      fork(watchEditPost),
      fork(watchDetailPost),
      fork(watchDeletePost),
      fork(watchLoadPostsCity),
      fork(watchLoadPostsCityAndGu),
    ]
  );
}
