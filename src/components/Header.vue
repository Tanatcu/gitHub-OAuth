<template>
	<header>
		<div class="container">
			<h2 class="title" @click="mainPage">GitHub OAuth</h2>

			<div class="right_panel">
				<img class="avatar" :src="user.avatar_url" alt="">
				<div class="login">{{user.login}}</div>
				<img src="../assets/logout.svg" alt="logout" class="logout_icon" @click="logout">
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'gitHeader',
		computed: {
			user() {
				return this.$store.state.Authorization.User
			}
		},
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
			margin: 18px 30px 0;
			width: 100%;

			.title {
				float: left;
				color: #4b67bf;
				font-size: 1.5em;
				cursor: pointer;
				box-sizing: border-box;
			}

			.right_panel {
				position: relative;
				float: right;
				width: 20%;
				height: 30px;

				.avatar {
					position: absolute;
					left: 0;
					height: 30px;
					width: 30px;
					border-radius: 30%;
				}

				.login {
					position: absolute;
					left: 20%;
					height: 30px;
					line-height: 30px;
				}

				.logout_icon {
					position: absolute;
					left: 50%;
					margin-left: 10px;
					margin-top: 5px;
					cursor: pointer;
				}
			}
		}
	}
</style>