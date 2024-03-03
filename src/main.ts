import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Form1 from './components/Form1.vue'
import Form2 from './components/Form2.vue'
import Form3 from './components/Form3.vue'
import Form4 from './components/Form4.vue'
import Form5 from './components/Form5.vue'
import Form6 from './components/Form6.vue'
import 'uno.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/1', component: Form1 },
    { path: '/2', component: Form2 },
    { path: '/3', component: Form3 },
    { path: '/4', component: Form4 },
    { path: '/5', component: Form5 },
    { path: '/6', component: Form6 },
  ]
})

createApp(App).use(router).mount('#app')
