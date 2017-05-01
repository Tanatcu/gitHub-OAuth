let Storage = {

	/**
	 * Set param to local storage
	 *
	 * @param {string} key
	 * @param {string, number} value
	 */
	set(key, value) {
		window.localStorage.setItem(key, value)
	},

	/**
	 * Get param by key
	 *
	 * @param {string} key
	 */
	get(key) {
		return window.localStorage.getItem(key)
	},

	/**
	 * Check param by key
	 *
	 * @param {string} key
	 */
	isExist(key) {
		let item = this.get(key)
		return (typeof item === 'string' && item !== "null" && item !== "undefined")
	},

	/**
	 * Remove param by key
	 *
	 * @param {string} key
	 */
	remove(key) {
		window.localStorage.removeItem(key)
	},

	/**
	 * Remove params by array of keys
	 *
	 * @param {array} arr
	 */
	removeMore(arr) {
		if(!arr.length)
			return false

		arr.map((name, i)=>{
			this.remove(name)
		})
	},

	/**
	 * Clear local storage
	 */
	clear() {
		window.localStorage.clear()
	}
}

/**
 * Standard function for installing custom plugins
 * @param {object} Vue - base instance
 */
Storage.install = function (Vue) {
	Vue.prototype.$storage = Storage
	Vue.storage = Storage
}

export default Storage