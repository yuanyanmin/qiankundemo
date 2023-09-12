import Vue from 'vue'
import App from './App.vue'
import router from './router'
import qiankunStore from '@/utils/qiankunStore'

Vue.config.productionTip = false
Vue.prototype.$actions = qiankunStore

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
