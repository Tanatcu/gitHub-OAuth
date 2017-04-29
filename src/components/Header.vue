<template>
	<header>
		<div class="container">
			<h2 class="title" @click="mainPage">GitHub OAuth</h2>

			<img src="../assets/logout.svg" alt="logout" class="logout_icon" @click="logout">
		</div>

	</header>
</template>

<script>
	export default {
		name: 'gitHeader',
		methods: {
			mainPage() {
				this.$router.push('/dashboard')
			},
			logout() {
				this.$store.dispatch('logout', this.$router)
			}
		}
	}
</script>

<style lang="scss" scoped>

	header {
		background: #ffa41e;
		position: fixed;
		width: 100%;
		height: 70px;

		.container {
			margin: 20px 30px 0;

			.title {
				float: left;
				color: #4b67bf;
				font-size: 1.5em;
				cursor: pointer;
			}

			.logout_icon {
				float: right;
			}
		}
	}
</style>