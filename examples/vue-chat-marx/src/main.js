import { createApp, nextTick } from 'vue'
import App from './App.vue'
import './styles/index.css'

const app = createApp(App)
app.directive('scroll-bottom', (el) => {
  nextTick(() => {
    el.scrollTop = el.scrollHeight - el.clientHeight
  })
})

app.mount('#app')
