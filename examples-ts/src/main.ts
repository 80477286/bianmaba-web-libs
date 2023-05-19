import {createApp} from 'vue'
import {createPinia} from 'pinia'
import bmbView from '@bianmaba/bmb-view'
import App from './App.vue'
import router from './router'
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-notification.css";
import "element-plus/theme-chalk/el-message-box.css";
import axios from "axios";

const app = createApp(App)
axios.interceptors.request.use((config) => {
    console.log("test-request-interceptor", config)
    return config;
})
axios.interceptors.response.use((resp) => {
    console.log("test-response-interceptor", resp)
    return resp;
})
app.use(createPinia())
app.use(router)
app.use(bmbView)

app.mount('#app')
