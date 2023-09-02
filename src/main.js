import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'

Vuelidate.use(Vuelidate)

createApp(App).use(router).mount('#app')
