<template></template>
<script>
	export default {
		name: 'BetweenPage',
		mounted() {
			this.$store.dispatch('getAccessToken').then((response) => {
				this.$storage.set('token', response.access_token)
				this.$storage.set('type', response.token_type)

				this.$store.commit('loginUser')

				this.$router.replace('/dashboard')
			}, (error) => {
				if(error.error_description)
					this.$event.toast('e', error.error_description)

				this.$router.replace('/')
			})
		}
	}
</script>