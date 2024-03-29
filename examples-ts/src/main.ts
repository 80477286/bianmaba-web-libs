import {createApp} from 'vue'
import {createPinia} from 'pinia'
import bmbView from '@bianmaba/bmb-view'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-notification.css";
import "element-plus/theme-chalk/el-message-box.css";
import "@bianmaba/bmb-view/dist/index.css"
import axios from "axios";
import {HttpClient} from "@bianmaba/http-client";

HttpClient.defaults((axios) => {
    axios.defaults.headers.common['abc'] = "abc";
})

const app = createApp(App)
axios.interceptors.request.use((config) => {
    console.log("test-request-interceptor", config)
    return config;
})
axios.interceptors.response.use((resp) => {
    console.log("test-response-interceptor", resp)
    return resp;
})
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
app.use(createPinia())
app.use(router)
app.use(bmbView)

app.mount('#app')
