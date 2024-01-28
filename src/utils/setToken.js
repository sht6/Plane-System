// 把token存到浏览器里面
export function setToken(tokenKey, token) {
  return localStorage.setItem(tokenKey, token);
}
// 获取token
export function getToken(tokenKey) {
  return localStorage.getItem(tokenKey);
}
// 删除token
export function removeToken(tokenKey) {
  return localStorage.removeItem(tokenKey);
}
