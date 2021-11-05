import axios from "axios";
const instance = axios.create({
    baseURL: 'http://test.dahun.xyz:9876',
});
instance.defaults.withCredentials = true;
export default instance;