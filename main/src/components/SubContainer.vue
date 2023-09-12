<template>
  <div>
    <div id="sub-container1"></div>
    <div id="sub-container2"></div>
  </div>
</template>

<script>
import { start } from 'qiankun'
import registerApps from '@/utils/qiankun'
import actions from '@/utils/qiankunStore'
export default {
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      registerApps()
      start({
        sandbox: {
          experimentalStyleIsolation: true
        }
      })

      // this.$actions.setGlobalState({name: 'xixiix'})
      // console.log('getGlobalState-name', this.$actions.getGlobalState('name'));
      console.log('actions', actions);
      console.log('getGlobalState-name', actions.getGlobalState('name'));
    }
  }  
}
</script>