<template>
	<div class="issues">
		<h4 class="title">Issues & pull request lists of {{repo}}</h4>

		<div class="issues_list">
			<h6 class="title">Issues lists</h6>

			<div v-for="issue in issuesList" class="list_item">
				<div class="item_name">{{issue.title}}</div>

				<div class="buttons_space">
					<!--<div class="issues_button" @click="show(issue)">i</div>-->
				</div>
			</div>

			<div class="empty" v-if="!issuesList.length">
				No issues for repository
			</div>
		</div>

		<div class="pull_requests_list">
			<h6 class="title">Pull request lists</h6>

			<div v-for="request in pullRequestList" class="list_item">
				<div class="item_name">{{request.title}}</div>

				<div class="buttons_space">
					<!--<div class="issues_button" @click="show(request)">i</div>-->
				</div>
			</div>

			<div class="empty" v-if="!pullRequestList.length">
				No pull request for repository
			</div>
		</div>

		<div class="event_buttons">
			<button v-for="event in events">{{event.type}}</button>
		</div>

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
			this.getIssues()
		},
		data() {
			return {
				issuesList: [],
				pullRequestList: [],
				events: []
			}
		},
		methods: {
			getIssues() {
				this.$api.get('repos/' + this.owner + '/' + this.repo + '/issues').then((response) => {
					response.map(item => {
						if(item.pull_request) this.pullRequestList.push(item)
						else this.issuesList.push(item)
					})
				})

				this.$api.get('repos/' + this.owner + '/' + this.repo + '/events').then((response) => {
					this.events = response
				})
			},
			show(data) {
				alert(data.title + ' ' + data.body)
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

			.title {
				margin: 20px 0;
				font-size: 1em;
			}

			.empty {
				margin-top: 10px;
			}
		}

		.pull_requests_list {

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