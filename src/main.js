import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

import router from '@/router'

import store from '@/store'

import '@/mock/mockServe'

import 'swiper/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  router,
  store
}).$mount('#app')
