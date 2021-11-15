import produce from "immer";

export const initialState = {
  // ]
  mainPosts: [],
  imagePaths: [],
  loadPostsDone: false,
  loadPostsError: null,
  addPostDone: false,
  addPostError: null,
  editPostDone: false,
  editPostError: null,
  detailPostDone: false,  
  detailPostError: null,
  deletePostDone: false,
  deletePostError: null,
  hasMorePosts: null,
  // removePostLoading: false,
  // removePostDone: false,
  // removePostError: null,
};

export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const EDIT_POST_REQUEST = "EDIT_POST_REQUEST";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_FAILURE = "EDIT_POST_FAILURE";

export const DETAIL_POST_REQUEST = "DETAIL_POST_REQUEST";
export const DETAIL_POST_SUCCESS = "DETAIL_POST_SUCCESS";
export const DETAIL_POST_FAILURE = "DETAIL_POST_FAILURE";

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

// export const generateDummyPost = (number) => Array(number).fill().map(() => ({
//     postId: 1,
//     insertDt: "insertDt",
//     postState: "postState",
//     postCity: "postCity",
//     postGu: "postGu",
//     mainField: "mainField",
//     lang: "lang",
//     framework: "프레임워크 : framework",
//     projectExperience: "프로젝트 경험: 1회",
//     tel: "tel",
//     imagePath: "imagePath",
//     postContent: "postContent",
// }));

// 리덕스 ->> 상태관리도구 > . <
export const loadPost = (data) => ({
  type: LOAD_POSTS_REQUEST,
  data,
});

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const editPost = (data) => ({
  type: EDIT_POST_REQUEST,
  data,
});

export const detailPost = (data) => ({
  type: DETAIL_POST_REQUEST,
  data,
});

export const deletePost = (data) => ({
  type: DELETE_POST_REQUEST,
  data,
});

// middleware
// export const getPostMiddleware = () => {
//     return (dispatch) => {
//       apis
//         .getPost()
//         .then((res) => {
//           const post_list = res.data;
//           console.log(post_list)
//           dispatch(loadPost(post_list));
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     };
//   };

// export const getPostMiddleware = () => async (dispatch) => {
//     console.log('미들웨어');
//     const a = await apis.getPost()
//   };

// 이전상태 -> 다음상태 교체 후 스토어로 저장한다.
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        // draft.hasMorePosts = draft.mainPosts.length < 50;
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      case ADD_POST_FAILURE:
        draft.addPostError = action.error;
        break;
      case EDIT_POST_REQUEST:
        draft.editPostDone = false;
        draft.editPostError = null;
        break;
      case EDIT_POST_SUCCESS:
        draft.editPostDone = true;
        break;
      case EDIT_POST_FAILURE:
        draft.editPostError = action.error;
        break;
      case DETAIL_POST_REQUEST:
        draft.detailPostDone = false;
        draft.detailPostError = null;
        break;
      case DETAIL_POST_SUCCESS:
        draft.detailPostDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        break;
      case DETAIL_POST_FAILURE:
        draft.detailPostError = action.error;
        break;
      case DELETE_POST_REQUEST:
        draft.deletePostDone = false;
        draft.deletePostError = null;
        break;
      case DELETE_POST_SUCCESS:
        draft.deletePostDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        break;
      case DELETE_POST_FAILURE:
        draft.deletePostError = action.error;
        break;  
      default:
        break;
    }
  });

export default reducer;
