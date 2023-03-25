import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupCalendar } from 'v-calendar';
import 'v-calendar/style.css'

// libraries
import FontAwesomeIcon from './libraries/font-awesome'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(setupCalendar, {})

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
