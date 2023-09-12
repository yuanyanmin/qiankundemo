import Vue from 'vue'
import App from './App.vue'
import './public-path'
import router from './router'

Vue.config.productionTip = false

let instance = null
function render() {
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount('#app2')
}

if (!window.__POWERED_BY_QIANKUN__) {
  console.log('独立运行');
  render()
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount() {
  console.log('props from main framework');
  render()
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
