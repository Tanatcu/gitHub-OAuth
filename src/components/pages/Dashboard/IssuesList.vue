<template>
	<div class="issues">
		<h4 class="title">Issues & pull request lists of {{repo}}</h4>

		<div v-if="issuesList.length" class="issues_list">
			<h6 class="title">Issues lists</h6>

			<div v-for="issue in issuesList" class="list_item"
					 @mouseover='showToolTip([issue.user.login + " create issue request to " + repo + " with description:", "\"" + issue.body + "\"", "Status is " + issue.state])'
					 @mousemove="replaceToolTip"
					 @mouseleave="hideToolTip">
				<div class="item_name">{{issue.title}}</div>
			</div>

			<div class="empty" v-if="!issuesList.length">
				No issues for repository
			</div>
		</div>

		<div v-if="pullRequestList.length" class="pull_requests_list">
			<h6 class="title">Pull request lists</h6>

			<div v-for="request in pullRequestList" class="list_item"
					 @mouseover="showToolTip([request.user.login + ' create pull request to ' + repo, 'Status is ' + request.state])"
					 @mousemove="replaceToolTip"
					 @mouseleave="hideToolTip">
				<div class="item_name">{{request.title}} {{request.body}}</div>
			</div>

			<div class="empty" v-if="!pullRequestList.length">
				No pull request for repository
			</div>
		</div>

		<div class="empty" v-if="!pullRequestList.length && !issuesList.length">
			No pull requests or issues for repository
		</div>

		<tooltip :data="tooltip.data" :coords="coordinates" :tumbler="tooltip.tumbler"></tooltip>
	</div>
</template>

<script>
	export default {
		name: "IssuesList",
		computed: {
			owner() {
				return this.$route.params.owner
			},
			repo() {
				return this.$route.params.repo
			}
		},
		mounted() {
			this.$api.get('repos/' + this.owner + '/' + this.repo + '/issues').then((response) => {
				response.map(item => {
					if(item.pull_request)
						this.pullRequestList.push(item)
					else
						this.issuesList.push(item)
				})
			})
		},
		data() {
			return {
				issuesList: [],
				pullRequestList: [],
				tooltip: {
					data: {},
					tumbler: false
				},
				coordinates: {x: 0, y: 0}
			}
		},
		methods: {
			showToolTip(data) {
				this.tooltip.data = data
				this.tooltip.tumbler = true
			},
			replaceToolTip(e) {
				this.coordinates.x = e.screenX
				this.coordinates.y = e.screenY
			},
			hideToolTip() {
				this.tooltip.data = {}
				this.tooltip.tumbler = false
			}
		}
	}
</script>

<style lang="scss" scoped>

	.issues {

		.title {
			margin: 20px 0;
			font-size: 1.3em;
		}

		.issues_list {
			margin-left: 20px;

			.list_item {
				cursor: pointer;
				padding: 5px 0;

				&:hover {
					background: #f1f1f1;
				}
			}

			.title {
				margin: 20px 0;
				font-size: 1em;
			}

			.empty {
				margin-top: 10px;
			}
		}

		.pull_requests_list {
			margin-left: 20px;

			.list_item {
				cursor: pointer;
			}

			.title {
				margin: 20px 0;
				font-size: 1em;
			}

			.empty {
				margin-top: 10px;
			}
		}
	}

</style>