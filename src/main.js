import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'aos/dist/aos.css'
import Aos from 'aos'


loadFonts()

createApp(App)
  .use(Aos.init())
  .use(router)
  .use(vuetify)
  .mount('#app')
