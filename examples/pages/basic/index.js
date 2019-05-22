import Vue from 'vue'
import VueForm from '../../../packages'
import App from './App'

Vue.use(VueForm)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
