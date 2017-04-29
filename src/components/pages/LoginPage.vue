<template>
	<div class="hello">
		<h2>Please, login to system via GitHub</h2>
		<div class="logo_img">
			<img src="../../assets/git_logo.png" alt="git logo">
		</div>
		<button @click="login" class="login">Login</button>
	</div>
</template>

<script>
	export default {
		name: 'LoginPage',
		methods: {
			login() {
				this.$store.dispatch('getCode')
			}
		}
	}
</script>

<style>
	@font-face {
		font-family: OpenSans;
		src: url(../../assets/fonts/OpenSans-Regular.ttf);
	}

	* {
		font-family: OpenSans, sans-serif;
	}
</style>

<style scoped>
	.hello {
		text-align: center;
		margin-top: 10%;
	}

	.logo_img {
		width: 100%;
	}

	.logo_img > img {
		height: 200px;
	}

	.login {
		border: none;
		width: 80px;
		height: 30px;
		margin-top: 15px;
	}
</style>
