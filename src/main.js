import Vue from "vue";
import ElementUI from "element-ui";
import api from "./api/service";
import "element-ui/lib/theme-chalk/index.css";
// 导入全局样式表
import "./assets/css/global.css";
import App from "./App.vue";
import router from "./router";

Vue.use(ElementUI);

Vue.prototype.api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
