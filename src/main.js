import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Antd, { message } from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
createApp(App).use(router).use(Antd).mount("#app");

App.config.globalProperties.$message = message;