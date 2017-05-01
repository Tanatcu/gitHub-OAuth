import {
	getAccessToken as getAccessToken,
	getCode as getCode,
	logout,
	getUser
} from './actions'

const state = {
	User: {
		isLogged: false
	}
}

export default {
	state,
	mutations: {

		/**
		 * Update user object
		 * @param {object} state - passing as default object
		 * @param {object} user - user object
		 */
		loginUser(state, user) {
			state.User = user || {}
			state.User.isLogged = true
		},

		/**
		 * Clean user object
		 * @param {object} state - passing as default object
		 */
		logout(state) {
			state.User = {}
			state.User.isLogged = false
		}
	},
	actions: {
		getAccessToken,
		getCode,
		getUser,
		logout
	}
}