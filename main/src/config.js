export default {
  subApps: [
    {
      name: 'app1',
      entry: '//localhost:9091',
      // container: '#box1',
      container: '#sub-container1',
      activeRule: '#/app1',
      props: {
        nickName: '张三'
      }
    },
    {
      name: 'app2',
      entry: '//localhost:9092',
      container: '#sub-container2',
      activeRule: '#/app2',
      props: {}
    },
  ]
}