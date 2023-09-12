import { initGlobalState } from 'qiankun';

const state = {
  name: '海绵宝宝'
}

const actions = initGlobalState(state)

actions.onGlobalStateChange((state, prev) => {
  console.log('父应用变化后的状态', state, prev);
})

setTimeout(() => {
  console.log('2s后修改名称');
  actions.setGlobalState({
    name: '派大星'
  })
}, 2000);

actions.getGlobalState = (key) => {
  return key ? state[key] : state
}

export default actions;