import Vue from 'vue'
import Vuex from 'vuex'

import Authorization from './auth'

Vue.use(Vuex)

/**
 * Included only one module
 */
export default new Vuex.Store({
	modules: {
		Authorization
	}
})