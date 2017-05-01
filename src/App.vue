<template>
	<div id="app">
		<vue-toastr ref="toastr"></vue-toastr>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		mounted () {
			/**
			 * Creating listener for toast modal
			 * Why here? Because only here situated vue-toastr component
			 * All toast will be show using this component
			 */
			this.$event.connect('showToast', this.showToast)
			this.$refs.toastr.defaultTimeout = 4000
		},
		beforeDestroy() {
			/**
			 * Before unmounting component i must destroy all listeners of this component
			 */
			this.$event.disconnect('showToast')
		},
		methods: {
			showToast(type, text) {
				this.$refs.toastr[type](text)
			}
		}
	}
</script>

<style>
	#app {
		color: #464646;
	}

	* {
		margin: 0;
		padding: 0;
		outline: none;
	}
</style>
