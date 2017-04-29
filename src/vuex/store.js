import Vue from 'vue'
import Vuex from 'vuex'

import Authorization from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		Authorization
	}
})