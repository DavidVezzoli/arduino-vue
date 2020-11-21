import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'

import HomePage from './components/HomePage.vue'

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
    { path: '/', component: HomePage },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')

export default router