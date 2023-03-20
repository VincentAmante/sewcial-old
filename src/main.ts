import { createApp } from 'vue'
import { createPinia } from 'pinia'

// libraries
import FontAwesomeIcon from './libraries/font-awesome'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
