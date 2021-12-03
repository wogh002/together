import axios from "axios";
const instance = axios.create({
  baseURL: "http://test.dahun.xyz:9876",
});
// /posts?page=0&size=8&sort=registerDate,desc
export const apis = {
  // 전제 게시물 불러오기
  getPost: ({ page, size, sort }) =>
    instance.get(`/posts?page=${page}&size=${size}&sort=${sort}`),

  loadPostsCity: ({ city, page, size }) =>
    instance.get(`/posts/city/${city}`, {
      params: { page, size },
    }),
  loadPostsCityAndGu: ({ city, gu, page, size }) =>
    instance.get(`/posts/city/${city}/gu/${gu}`, {
      params: { page, size },
    }),
  addPost: ({ formData, config }) =>
    instance.post("/user/posts", formData, config),

  detailPost: (data) => instance.get(`/posts/${data}`),
  
  deletePost: (data) => instance.delete(`/posts/${data}`),
};
export default instance;

// const instance = axios.create({
//   baseURL: "http://localhost:4000/",
//   headers: {
//     "content-type": "application/json;charset=UTF-8",
//     accept: "application/json",
//   },
// });
