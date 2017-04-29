import Vue from 'vue'

const Bus = new Vue()

let Event =  {
	connect: function(who, callback) {
		Bus.$on(who, callback)
	},
	disconnect: function(who, callback) {
		Bus.$off(who, callback)
	},
	send: function (who, argument, arg) {
		Bus.$emit(who, argument, arg)
	},
	toast: function(type, text, someParam) {
		Bus.$emit('showToast', type, text, someParam)
	}
}

Event.install = function(Vue) {
	Vue.prototype.$event = Event
	Vue.event = Event
}

export default Event
