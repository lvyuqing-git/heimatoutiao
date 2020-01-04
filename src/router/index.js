import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'
import Personal from '@/views/personal.vue'
Vue.use(VueRouter)
let router = new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Personal',
      path: '/personal',
      component: Personal
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path.indexOf('/personal') === 0) {
    let token = localStorage.getItem('user_token')
    if (token) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()

  }
})
export default router