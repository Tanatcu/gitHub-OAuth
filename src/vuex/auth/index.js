import {
	getAccessToken as getAccessToken,
	getCode as getCode,
	logout
} from './actions'

const state = {
	User: {
		isLogged: false
	}
}

export default {
	state,
	mutations: {
		loginUser(state) {
			state.User.isLogged = true
		},
		logout(state) {
			state.User.isLogged = false
		}
	},
	actions: {
		getAccessToken,
		getCode,
		logout
	}
}