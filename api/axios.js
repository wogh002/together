import axios from "axios";
const instance = axios.create({
  baseURL: 'http://test.dahun.xyz:9876',
});

export const apis = {
  // 전제 게시물 불러오기
  getPost: ({ page, size }) => instance.get(`/posts/`, {
    params: { page, size }
  }),
  
  // 게시물 수정하기
  editPost: (data) => instance.put(`/posts/${data.postId}`, data),
  
};


  


instance.defaults.withCredentials = true;
export default instance;

// const instance = axios.create({
//   baseURL: "http://localhost:4000/",
//   headers: {
//     "content-type": "application/json;charset=UTF-8",
//     accept: "application/json",
//   },
// });

 // 파일업로드
  // uploadfile: (contents) => instance.post("api/uploadfile", contents),
  // // 게시물 작성하기
  // addPost: (contents) => instance.post("/user/posts", contents),
  // // 게시물 수정하기
  // editPost: (id, contents) => instance.put(`/post/${id}`, contents),
  // // 현재 게시글??? (API추가 후 추후 정리 : enddate랑 같이 인자값으로 받아서 삼항연산자로 요청url이 변경되게)
  // detailPost: (id) => instance.get(`/post/${id}`),
  // // instance.get(`/post/${id}`),
  // // 게시물 삭제하기
  // deletePost: (id) => instance.delete(`/post/${id}`),


