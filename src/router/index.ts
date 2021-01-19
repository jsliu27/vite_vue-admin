import {createWebHashHistory, createRouter} from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: () => import('../view/home/index.vue') },
    { path: '/click', component: () => import('../view/home/click.vue') }
  ]
})

export default router
