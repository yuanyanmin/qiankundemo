<template>
  <div>
    <div id="sub-container1"></div>
    <div id="sub-container2"></div>
  </div>
</template>

<script>
import { start } from 'qiankun'
import registerApps from '@/utils/qiankun'
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
    }
  }  
}
</script>