<template>
	<div class="question">
		<div class="question-header">
			<h1>
				<i class="el-icon-question" />
				{{title}}
				<i class="el-icon-edit" @click="editQuestion">修改</i>
			</h1>
			 <el-collapse accordion>
				<el-collapse-item>
					<template slot="title">
					  展开内容
					</template>
					<div>{{content}}</div>
				</el-collapse-item>
			</el-collapse>
			<popForm v-if="show"></popForm>
		</div>
	</div>
</template> 

<script>
import popForm from '../../components/public/popForm'
	export default {
		data () {
			return {
				title: '',
				content: '',
				show: false
			}
		},
		methods: {
			getMsg () {
				let id = this.$route.params.id
				this.ajaxGet(question.showById + '/' + id, res=>{
					this.title = res.data.title
					this.content = res.data.content
				})
			},
			editQuestion() {
				console.log('ferf');
				this.show = true
				console.log(this.show);
			}
		},
		mounted() {
			this.getMsg()
		},
		components: {
			popForm
		}
	}
</script>

<style lang="scss">
$color: #8590a6;
	.question{
		&-header{
			padding: 10px;
			background: #fff;
			text-align: left;
			.el-icon-edit{
				font-size: 16px;
				color: $color;
				margin-left: 20px;
				&:hover{
					cursor: pointer;
				}
			}
		}
		.el-collapse{
			border: none;
			&-item__header{
				width: 80px;
				border: none;
				color: $color;
			}
			&-item__wrap{
				border: none;
			}
			&-content{
				font-size: 16px;
			}
		}
	}
</style>