// 对aixos的二次封装
import axios from "axios";
import { getToken } from "@/utils/setToken.js";
import { Message } from "element-ui";

const service = axios.create({
  baseURL: "/api", //baseURL会自动加载请求地址上
  timeout: 30000, //超出响应时间，他会报错
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求开始前做点什么(获取token)
    config.headers["token"] = getToken("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加相应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    let { status, message } = response.data;
    if (response.status !== 200) {
      Message({ message: message || "error", type: "  warning" });
    }
    console.log(response.data);
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
