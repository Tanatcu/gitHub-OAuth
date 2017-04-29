let Storage = {

	getKey() {
		return window.localStorage.getItem('X-Access-Token')
	},

	setKey(key) {
		window.localStorage.setItem('X-Access-Token', key)
	},

	isExistKey() {
		let key = getKey();
		return (typeof key === 'string' && key !== "null" && key !== "undefined")
	},

	removeKey() {
		window.localStorage.removeItem('X-Access-Token')
	},

	set(key, value) {
		window.localStorage.setItem(key, value)
	},

	get(key) {
		return window.localStorage.getItem(key)
	},

	isExist(key) {
		let item = this.get(key)
		return (typeof item === 'string' && item !== "null" && item !== "undefined")
	},

	remove(key) {
		window.localStorage.removeItem(key)
	},

	removeMore(arr) {
		if(!arr.length)
			return false

		arr.map((item, i)=>{
			this.remove(item)
		})
	},
	
	clear() {
		window.localStorage.clear()
	}
}

Storage.install = function (Vue) {
	Vue.prototype.$storage = Storage
	Vue.storage = Storage
}

export default Storage