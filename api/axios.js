import axios from "axios";
// const instance = axios.create({
//   baseURL: 'http://test.dahun.xyz:9876',
// });

const instance = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

export const apis = {
  // 전제 게시물 불러오기
  getPost: () => instance.get("/post"),
  // 파일업로드
  uploadfile: (contents) => instance.post("api/uploadfile", contents),
  // 게시물 작성하기
  addPost: (contents) => instance.post("/post", contents),
  // 게시물 수정하기
  editPost: (id, contents) => instance.put(`/post/${id}`, contents),
  // 현재 게시글??? (API추가 후 추후 정리 : enddate랑 같이 인자값으로 받아서 삼항연산자로 요청url이 변경되게)
  detailPost: (id) => { console.log("aaaaaaaaaaaa" + id)},
  // instance.get(`/post/${id}`),
  // 게시물 삭제하기
  delPost: (id) => instance.delete(`/post/${id}`),
};
instance.defaults.withCredentials = true;
export default instance;
