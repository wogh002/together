import axios from "axios";
// import { getCookie, TOKEN_NAME } from "./cookie";
const instance = axios.create({
    baseURL: 'http://test.dahun.xyz:9876',
});
instance.defaults.withCredentials = true;
// instance.defaults.headers.common['Authorization'] = getCookie(TOKEN_NAME);
export default instance;