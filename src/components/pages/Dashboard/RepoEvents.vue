<template>
	<div class="events">
		<h4 class="title">
			Events list of {{repo}}
		</h4>
		<div v-for="event in events" class="event"
				 @mouseover="showToolTip(event)"
				 @mousemove="replaceToolTip"
				 @mouseleave="hideToolTip">
			{{types[event.type]}}
		</div>

		<div v-if="!events.length" class="empty">
			List of events is empty
		</div>

		<tooltip :data="tooltip.data" :coords="coordinates" :tumbler="tooltip.tumbler"></tooltip>
	</div>
</template>
<script>
	export default {
		name: "RepoEvents",
		computed: {
			owner() {
				return this.$route.params.owner
			},
			repo() {
				return this.$route.params.repo
			}
		},
		mounted() {
			this.$api.get('repos/' + this.owner + '/' + this.repo + '/events').then((response) => {
				this.events = response
			})
		},
		data() {
			return {
				events: [],
				tooltip: {
					data: {},
					tumbler: false
				},
				coordinates: {x: 0, y: 0},

				/**
				 * Bad practice
				 */
				types: {
					"IssuesEvent": "Issue event",
					"PushEvent": "Push event",
					"CreateEvent": "Create event"
				},
				minTypes: {
					"IssuesEvent": "create issue. For more details see repo issues",
					"PushEvent": "push commits:",
					"CreateEvent": "create "
				}
			}
		},
		methods: {
			showToolTip(data) {
				this.tooltip.data = [data.actor.login + ' ' + this.minTypes[data.type]]

				/**
				 * Bad code too. I didn't have time to develop class for parsing events to readable text for human
				 */
				if(data.type === 'PushEvent') {
					data.payload.commits.map(item => {
						this.tooltip.data.push('"' + item.message + '"')
					})
				} else if(data.type === 'CreateEvent') {
					this.tooltip.data[0] += data.payload.ref_type
				}

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
	.events {
		.title {
			margin: 20px 0;
			font-size: 1.3em;
		}

		.event {
			border: none;
			padding: 10px;
			height: 25px;
			cursor: pointer;

			&:hover {
				background: #f1f1f1;
			}

			.title {
				margin: 20px 0;
				font-size: 1em;
			}
		}

		.empty {
			margin-top: 10px;
		}
	}
</style>