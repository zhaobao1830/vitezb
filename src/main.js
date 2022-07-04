import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from '@/store'

import { Button } from 'vant'

import { registerGlobComp } from '@/components/base/registerGlobComp'

const app = createApp(App)

// 配置store
setupStore(app)

// 注册全局组件
registerGlobComp(app)

app.use(Button)
  .use(router)
  .mount('#app')
