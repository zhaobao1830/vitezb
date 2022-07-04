import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Button } from 'vant'

import { registerGlobComp } from '@/components/base/registerGlobComp'

const app = createApp(App)

registerGlobComp(app)

app.use(Button)
  .use(router)
  .mount('#app')
