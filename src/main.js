import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
	blogs: mock,
	}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
