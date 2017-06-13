// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
var apiURL = 'https://randomuser.me/api/?results=25'
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  ready: function () {
    Vue.$http.get(apiURL).then(response => {
      // success callback
      console.log(response.body)
      alert('test')
    }, response => {
      // error callback
    })
  }
})
