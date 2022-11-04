import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const getImgUrl = (baseUrl, name) => {
  return new URL(baseUrl + name, import.meta.url);
};

const app = createApp(App);

app.config.globalProperties.$image = getImgUrl;

app.use(antd).mount("#app");
