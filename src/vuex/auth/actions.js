import Vue from 'vue'

/**
 * Function checking status (logged or isn't) of user
 * @params {object} default store object
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

/**
 * Redirect to gitHub for starting authorization
 */
export function getCode() {
	window.location = 'https://github.com/login/oauth/authorize?client_id=' + process.env.CLIENT_ID
}

/**
 * Exchanging unique code to access_token
 * I send request to my server middleware where will did redirect request to github server (file: "dist.server.js")
 * Necessary data i getting from "process" object (file: "config/dev.env.js")
 * I getting unique code from redirect url link
 *
 * @returns {Promise}
 */
export function getAccessToken() {
	let code = window.location.search.replace('?code=', '')

	return new Promise((resolve, reject) => {

			/**
			 * This way of requesting access_token returns 404 for me.
			 * My attempt to sent request from front side (failure)
			 * I'm leaving this commented string for continue to fixing this problem
			 */
			// let url = 'https://github.com/login/oauth/access_token'

			// url += '?client_id=' + process.env.CLIENT_ID
			// url += '&client_secret=' + process.env.CLIENT_SECRET
			// url += '&code=' + code

			/**
			 * Getting access_token via node middleware
			 */
			Vue.api.post('http://localhost:8080/get_token', {
				client_id: process.env.CLIENT_ID,
				client_secret: process.env.CLIENT_SECRET,
				code: code
			}).then(response => {
				if(!response.access_token)
					reject(response)

				resolve(response)
			})
		}
	)
}

/**
 * Getting user
 * @param commit
 */
export function getUser({commit}) {
	Vue.api.get("user").then(response => commit('loginUser', response))
}

/**
 * Logout function
 * Change status of user
 * Removing all necessary data of user from localStorage
 * Go to main page
 *
 * @param {object} state - root object of store
 * @param {object} router - i use router plugin
 */
export function logout({state}, router) {
	state.User.isLogged = false

	Vue.storage.removeMore(['token', 'type'])
	router.push('/')
}
