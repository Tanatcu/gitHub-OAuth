import Vue from 'vue'

/**
 * Function checking token of user
 * @return {boolean}
 */

export function Check({commit, state}) {
	if(state.Authorization.User.isLogged) {
		return true
	} else if(Vue.storage.isExist('token')) {
		commit('loginUser')

		return true
	}

	return false
}

export function getCode() {
	window.location = 'https://github.com/login/oauth/authorize?client_id=406d2f8f932cc21dc3ce'
}

export function getAccessToken() {
	let code = window.location.search.replace('?code=', '')

	return new Promise((resolve, reject) => {
		Vue.api.get('https://github.com/login/oauth/access_token', {
			client_id: '406d2f8f932cc21dc3ce',
			client_secret: '90422725a40a5b07ddfd82947ea1109c668dedf3',
			code: code
		}).then((response) => {
			if(!response.access_token)
				reject(response)

			resolve(response)
		})
	})
}

export function logout({state}, router) {
	state.User.isLogged = false

	Vue.storage.removeMore(['token', 'type'])
	router.push('/')
}