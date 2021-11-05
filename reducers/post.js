import produce from 'immer';

export const initialState = {

// ]
    mainPosts: [],
    imagePaths: [],
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    hasMorePosts:null,
    // removePostLoading: false,
    // removePostDone: false,
    // removePostError: null,
  };

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

// export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
// export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
// export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

// 10


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

const dummyPost = () => {
    list: [
        {
            insertDt: "",
            postState: "",
            postCity: "",
            postGu: "",
            mainField: "",
            lang: "",
            framework: "",
            projectExperience: "",
            tel: "",
            imagePath: "",
            postContent: data,
        }
    ]
};

// 리덕스 ->> 상태관리도구 > . <
export const loadPost = (data) => ({
    type: LOAD_POSTS_REQUEST,
    data,
});

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
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
const reducer = (state = initialState , action) => produce(state, draft => {
    switch (action.type) {
        case LOAD_POSTS_REQUEST:
            draft.loadPostsLoading = true;
            draft.loadPostsDone = false;
            draft.loadPostsError = null;
            console.log('LOAD_POSTS_REQUEST받고 리듀서도착')
            break;
        case LOAD_POSTS_SUCCESS:
            draft.loadPostsLoading = false;
            draft.loadPostsDone = true;
            draft.mainPosts = action.data.concat(draft.mainPosts);
            draft.hasMorePosts = draft.mainPosts.length < 50;
            break;
        case LOAD_POSTS_FAILURE:
            draft.loadPostsLoading = false;
            draft.loadPostsError = action.error;
            break;
        case ADD_POST_REQUEST:
            draft.addPostLoading = true;
            draft.addPostDone = false;
            draft.addPostError = null;
            break;
        case ADD_POST_SUCCESS:
            draft.addPostLoading = false;
            draft.addPostDone = true;
            draft.mainPosts.unshift(dummyPost(action.data));
            break;
        case ADD_POST_FAILURE:
            draft.addPostLoading = false;
            draft.addPostError = action.error;
            break;
        default:
            break;
    }
})

export default reducer;