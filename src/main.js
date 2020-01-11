import Vue from 'vue'
import App from './App.vue'
import '@/assets/style/reset.css'
Vue.config.productionTip = false
import router from '@/router/index.js'
import { Toast, Icon, Dialog, Field,Picker,Uploader,Tab,Tabs } from 'vant'
Vue.use(Toast)
	.use(Icon)
	.use(Dialog)
    .use(Field)
    .use(Picker)
    .use(Uploader)
    .use(Tab)
    .use(Tabs)
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
