import { createApp } from 'vue'
import App from './App.vue'

import { Button } from 'vant'

import { registerGlobComp } from '@/components/base/registerGlobComp'

const app = createApp(App)

registerGlobComp(app)

app.use(Button)
  .mount('#app')
