import Vue from 'vue'
import App from './App.vue'
import LbsUI from '../packages'

Vue.config.productionTip = false
Vue.use(LbsUI)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
