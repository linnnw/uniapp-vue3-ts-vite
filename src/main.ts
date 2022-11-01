import { createSSRApp } from 'vue'
import App from './App.vue'
import uView from 'vk-uview-ui'

import store from './store'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uView)
  app.use(store)
  return {
    app
  }
}
