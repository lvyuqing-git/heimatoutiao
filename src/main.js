import Vue from 'vue'
import App from './App.vue'
import '@/assets/style/reset.css'
Vue.config.productionTip = false
import router from '@/router/index.js'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
