import Vue from 'vue'

/**
 * A new copy of Vue instance. All events will be triggered inside
 * @type {Vue}
 */
const Bus = new Vue()

let Event =  {

	/**
	 * Connecting event to event bus
	 * @param {string} who - event name
	 * @param callback - callback of event
	 */
	connect: function(who, callback) {
		Bus.$on(who, callback)
	},

	/**
	 * Disconnecting event from event bus
	 * @param {string, array} who - event name (can be array of event names)
	 * @param callback - callback of event (optional)
	 */
	disconnect: function(who, callback) {
		Bus.$off(who, callback)
	},

	/**
	 * Triggering event inside event bus
	 * @param {string} who - event name
	 * @param {object} argument - object of arguments of event (optional)
	 */
	send: function (who, argument) {
		Bus.$emit(who, argument)
	},

	/**
	 * Special trigger for toast modal
	 * @param {string} type - type of message (s - success, i - info, e - error, ets.)
	 * @param {string} text - text of message
	 * @param someParam - custom param if you need (optional)
	 */
	toast: function(type, text, someParam) {
		Bus.$emit('showToast', type, text, someParam)
	}
}

/**
 * Default method for installing plugin
 * @param Vue
 */
Event.install = function(Vue) {
	Vue.prototype.$event = Event
	Vue.event = Event
}

export default Event
