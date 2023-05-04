import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-notification.css";
import "element-plus/theme-chalk/el-message-box.css";
import axios from "axios";

const app = createApp(App)
axios.interceptors.response.use((resp) => {
    console.log("abcdef", resp)
    return resp;
})
axios.interceptors.response.use((resp) => {
    console.log("fdsa", resp)
    return resp;
})
app.use(createPinia())
app.use(router)

app.mount('#app')
