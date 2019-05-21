import Vue from 'vue'
import JForm from '../../../packages'
import App from './App'

Vue.use(JForm)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
