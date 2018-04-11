<template>
	<div class="mine-card">
		<el-card :body-style="{ padding: '0px' }">
			<div v-for="(item, index) in listData">
				<span>{{item.title}}</span>
				<div class="mine-card-operate">
					<time class="time">{{item.date|moment("YYYY-MM-DD")}}</time>
					<el-button type="text">操作按钮</el-button>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script> 

	export default {
		data () {
			return {
				currentDate: new Date()
			}
		},
		props: {
			listData: {}
		},
		methods: {
		},
		mounted() {
			// console.log(this.$props.listData);
		}
	}
</script>

<style lang="scss">
	.mine-card{
		&-operate {

		}
		.el-tabs__item {
			font-size: 18px;
		}
		.el-card{
			border: none;
			text-align: left;
		}
	}

</style>