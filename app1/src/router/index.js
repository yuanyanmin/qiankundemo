import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/app1',
    name: 'app1',
    meta: {},
    component: () => import('@/components/HelloWorld.vue')
  }
]

const router = new VueRouter({
  routes,
  // base: '/app1',
  mode: 'hash'
})
export default router 