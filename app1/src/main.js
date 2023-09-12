import Vue from 'vue'
import App from './App.vue'
import './public-path'
import router from './router'

Vue.config.productionTip = false

let instance = null
function render(props) {
  console.log('render-props', props);

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount('#app1')
}

if (!window.__POWERED_BY_QIANKUN__) {
  console.log('独立运行');
  render()
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework');
  // render(props)
  storeChange(props)
}

export async function unmount() {
  console.log('unmount');
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}

function storeChange (props) {
  props.onGlobalStateChange((state, prev) => {
    console.log('子应用变化后的状态', state, prev);
  })
  setTimeout(() => {
    console.log('4s后修改名称');
    props.setGlobalState({ name: '章鱼哥' })
  }, 4000);
  render(props)
}
