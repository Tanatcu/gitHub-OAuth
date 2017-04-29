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
			this.$refs.toastr.defaultTimeout = 4000
			this.$event.connect('showToast', this.showToast)
		},
		beforeDestroy() {
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
