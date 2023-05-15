import {createApp} from 'vue'
import App from './App.vue'
// 完整引入组件库
import WeDesign from 'bm' // 本地开发

const app = createApp(App)


app.use(WeDesign).mount('#app')
