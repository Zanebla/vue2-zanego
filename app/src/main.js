import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

import router from '@/router'

import store from '@/store'

import '@/mock/mockServe'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
