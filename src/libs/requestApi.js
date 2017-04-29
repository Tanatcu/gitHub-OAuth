import Vue from 'vue'
import Http from 'vue-resource'

/**
 * For using imported plugin i must call 'use' method
 */
Vue.use(Http)

/**
 * Basic header for json format
 */
Vue.http.headers.common["Accept"] = "application/json"

/**
 * Basic url root for API requests
 */
Vue.http.options.root = 'https://api.github.com'

let Api = {

	/**
	 * Manual request function
	 *
	 * @param {string} method can be get, post, put, delete
	 * @param {string} url is part of the full url
	 * @param {object} data
	 * @returns {Promise.<T>}
	 * @private
	 */
	_request(method, url, data) {

		/**
		 * In a vue-resource, different data for different methods are called differently
		 * For this I rename data object
		 */
		switch (method) {
			case "get":
				data = {"params": data}
				break;
			case "post":
				data = {"body": data}
				break;
			case "delete":
				data = {"body": data}
				break;
		}
		/**
		 * Returning promise
		 * @url {string} contains root part computed before and url part
		 */
		return Vue.http[method](url, data).then((response) => {
			return response.body
		}).catch(this.checkError)
	},

	get(url, data) {
		return this._request('get', url, data)
	},
	post(url, data) {
		return this._request('post', url, data)
	},
	put(url, data) {
		return this._request('put', url, data)
	},
	patch(url, data) {
		return this._request('patch', url, data)
	},
	remove(url, data) {
		return this._request('delete', url, data)
	},

	/**
	 * When promise was rejected that this function will catching error and show
	 * @param error
	 */
	checkError(error) {
		Vue.event.toast('e', error.statusText || error.status)
	}
}

/**
 * Standard function for installing custom plugins
 * @param {object} Vue - base instance
 */
Api.install = function(Vue) {
	Vue.prototype.$api = Api
	Vue.api = Api
}

export default Api
