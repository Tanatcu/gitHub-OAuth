<template>
	<div class="container" :style="{'top': coords.y - 130 + 'px', 'left': coords.x - 50 + 'px'}" v-show="tumbler">
		<div v-for="item in data">
			{{item}}
		</div>
	</div>
</template>

<script>
	export default {
		name: "ToolTip",
		props: ["data", "tumbler", "coords"],
		computed: {
			x() {
				console.info(this.coords.x)
				return this.coords.x
			},
			y() {
				console.info(this.coords.y)
				return this.coords.y
			}
		}
	}
</script>

<style lang="scss" scoped>

	.container {
		position: absolute;
		word-wrap: break-word;

		background: #989898;
		border-radius: 5px;
		color: #ffffff;
		padding: 5px;
	}

</style>