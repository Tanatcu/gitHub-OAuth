import Vue from 'vue'
import Toastr from 'vue-toastr'

import store from './vuex/store'
import { Check as CheckAuthorization } from './vuex/auth/actions'

import RequestApi from './libs/requestApi'
import EventBus from './libs/eventBus'
import Storage from './libs/synchroLocalStorage'

import App from './App.vue'
import router from './router'

require('vue-toastr/src/vue-toastr.less')

Vue.use(Toastr)

Vue.use(RequestApi)
Vue.use(EventBus)
Vue.use(Storage)

Vue.component('vue-toastr', Toastr)

Vue.http.interceptors.push((request, next) => {
	let token = Vue.storage.get('token')
	let type = Vue.storage.get('type')

	if(CheckAuthorization(store) && request.url !== 'https://github.com/login/oauth/access_token')
		request.headers.set("Authorization", type + ' ' + token)

	next();
})

router.beforeEach((to, from, next) => {
	let pages = ['LoginPage', 'RedirectPage']

	if(!CheckAuthorization(store) && pages.indexOf(to.name) === -1)
		next({name: 'LoginPage'})

	next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})