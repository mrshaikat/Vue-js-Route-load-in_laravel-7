import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import firstPage from './components/pages/myFirstVuePage.vue'
import newRoure from './components/pages/newFirstVuePage.vue'

const routes = [

    {
        path: '/my-new-vue-route',
        component: firstPage
    },
    {
        path: '/new-route',
        component: newRoure
    }
]

export default new Router({
    mode: 'history',
    routes
})

