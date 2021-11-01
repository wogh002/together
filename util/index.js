import axios from "axios";
const instance = axios.create({
    baseURL: '백엔드 주소'
});
export default instance;