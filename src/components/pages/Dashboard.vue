<template>
	<div class="dashboard">
		<git-header></git-header>

		<div class="container_for_pages">
			<router-view></router-view>
		</div>

	</div>
</template>

<script>
	import GitHeader from '../Header.vue'

	export default {
		name: "Repositories",
		components: {GitHeader}
	}
</script>

<style lang="scss" scoped>

	.dashboard {

		.container_for_pages {
			padding-top: 70px;
			max-width: 1100px;
			margin: 0 auto;
		}
	}

</style>