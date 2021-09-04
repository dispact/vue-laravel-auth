import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './index.css'
import router from './router'
// import Axios from 'axios'

// Vue.prototype.$http = Axios
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
// }

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
