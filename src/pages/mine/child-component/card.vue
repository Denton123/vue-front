<template>
	<div class="mine-card">
		<el-card :body-style="{ padding: '0px' }" v-if="listData.length > 0" >
			<h3 class="mine-card-tag">{{`我的${tabName}`}}</h3>
			<div v-for="(item, index) in listData" class="mine-card-wrap mr-bottom">
				<h2 class="mine-card-title">
					<router-link :to="`question/${item.id}`">
						{{item.title}}
					</router-link>
				</h2>
				<div class="mine-card-user">
					<Avatar 
						shape="square" 
						icon="person"
						:src="`uploadImgs/${item.User.avatar}`"
						class="mine-card-user-avatar"/>
					<h2 class="mine-card-user-username">{{item.User.name}}</h2>
				</div>
				<div class="mine-card-operate">
					<time class="mine-card-operate-time">{{item.date|moment("YYYY-MM-DD")}}</time>
					<el-button type="text" class="mine-card-operate-btn">操作按钮</el-button>
				</div>
			</div>
		</el-card>
		<el-card :body-style="{ padding: '0px' }" v-else>
			<div class="mine-card-blank">
				<i :class="blankIcon" />
				<p>{{`还没有${tabName}`}}</p>
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
			listData: {},
			tabName: '',
			blankIcon: ''
		},
		methods: {
		},
		mounted() {
		}
	}
</script>

<style lang="scss">
	.mine-card{
		&-tag{
			line-height: 40px;
			border-bottom: 1px solid #f6f6f6;
		} 
		&-blank{
			padding: 50px;
			text-align: center;
			color: #8590a6;
			i{
				font-size: 50px;
			}
		}
		&-title a{
			color: #000;
		}
		&-wrap{
			overflow:hidden;
			border-bottom: 1px solid #f6f6f6;
		}
		&-user {
			margin-top: 10px;
			&-avatar{
				margin-right: 10px;
			}
			&-username{
				display: inline;
			}
		}
		&-operate {
			&-btn{
				float: right;
			}
			&-time{
				float: left;
				line-height: 3.5;
				color:#8590a6;
			}
			
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