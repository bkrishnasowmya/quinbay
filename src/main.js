import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'
// import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
