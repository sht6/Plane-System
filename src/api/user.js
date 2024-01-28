//项目中我们把对应的接口请求封装成对应的api来调用
import api from "./service";

// 用户的登录接口
export function login(data) {
  return api({
    method: "post",
    url: "/login",
    data,
  });
}
