<template>
	<div class="container" :style="{'bottom': bottom + 'px', 'left': coords.x + 'px'}"
			 v-show="tumbler">
		<div v-for="item in data">{{item}}</div>
	</div>
</template>

<script>
	export default {
		name: "ToolTip",
		props: ["tumbler", "coords", "data"],
		computed: {
			bottom() {
				/**
				 * I use "- 35" expression for configure position of tooltip (custom value)
				 */
				return this.screenHeight - this.coords.y - 35
			}
		},
		data() {
			return {
				screenHeight: screen.height
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