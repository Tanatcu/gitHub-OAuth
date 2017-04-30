<template>
	<div class="repos">
		<h4 class="title">List of repositories</h4>

		<div class="list">
			<div v-for="repository in repositories" class="list_item">
				<div class="item_name">{{repository.name}}</div>

				<div class="buttons_space">
					<div class="issues_button" @click="showIssues(repository)"
							 @mouseover="showToolTip('Show issues of ' + repository.name)"
							 @mousemove="replaceToolTip"
							 @mouseleave="hideToolTip">
						i
					</div>
				</div>
			</div>
		</div>

		<tooltip :data="tooltipData.data" :coords="coords" :tumbler="tooltipData.tumbler"></tooltip>
	</div>
</template>

<script>
	import tooltip from '../../ToolTip.vue'

	export default {
		name: "Repositories",
		components: {tooltip},
		mounted() {
			this.getRepositories()
		},
		data() {
			return {
				repositories: [],
				tooltipData: {
					data: [],
					tumbler: false
				},
				coords: {
					x: 0,
					y: 0
				}
			}
		},
		methods: {
			getRepositories() {
				this.$api.get('user/repos').then((response) => {
					this.repositories = response
				})
			},
			showIssues(repo) {
				this.$router.push({
					name: 'IssuesList',
					params: {
						owner: repo.owner.login,
						repo: repo.name
					}
				})
			},
			showToolTip(data) {
				this.tooltipData.data = [data]
				this.tooltipData.tumbler = true
			},
			replaceToolTip(e) {
				this.coords.x = e.screenX
				this.coords.y = e.screenY
			},
			hideToolTip() {
				this.tooltipData.tumbler = false
				this.tooltipData.data = {}
			}
		}
	}
</script>

<style lang="scss" scoped>

	.repos {

		.title {
			margin: 20px 0;
			font-size: 1.3em;
		}

		.list {

			.list_item {
				border: none;
				padding: 10px;
				height: 25px;

				&:hover {
					background: #f1f1f1;
				}

				.item_name {
					display: inline-block;
					width: 50%;
				}

				.buttons_space {
					display: inline-block;
					padding-left: 20%;

					.issues_button {
						width: 20px;
						font-style: italic;
						border: 1px solid #cccccc;
						border-radius: 5px;
						padding: 1px 5px;
						text-align: center;

						&:hover {
							background: #cccccc;
							cursor: pointer;
						}
					}
				}
			}
		}
	}

</style>