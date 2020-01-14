import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'
import Personal from '@/views/personal.vue'
import Edit_profile from '@/views/Edit_profile.vue'
import Index from '@/views/Index'
import ArticleDetails from '../views/ArticleDetails'
Vue.use(VueRouter)
let router = new VueRouter({
	routes: [
        {
			name: 'Index',
			path: '/',
			component: Index
        },
        {
			name: 'ArticleDetails',
			path: '/articleDetails/:id',
			component: ArticleDetails
        },
		{
			name: 'Login',
			path: '/login',
			component: Login
        },
        {
			name: 'Index',
			path: '/index',
			component: Index
		},
		{
			name: 'Personal',
			path: '/personal',
			component: Personal
		},
		{
			name: 'Edit_profile',
			path: '/edit_profile',
			component: Edit_profile
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
