import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: { name: 'home' },
    meta: { title: '首页' },
    component: () => import('@/components/Layout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {},
        component: () => import('@/components/HelloWorld.vue')
      },
      {
        path: '/app1',
        name: 'app1',
        meta: {},
        component: () => import('@/components/SubContainer.vue')
      },
      {
        path: '/app2',
        name: 'app2',
        meta: {},
        component: () => import('@/components/SubContainer.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})
export default router 