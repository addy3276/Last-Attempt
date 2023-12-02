// axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://petstore.swagger.io/#/',
  timeout: 5000, 
});

instance.interceptors.request.use(request => {
    request.headers.Authorization = ""
    return request
})

export default instance;