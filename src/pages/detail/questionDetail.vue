/**
 * 
 * 问题详情组件
 * @author 舒丹彤 
 * @date 2018/04/26
 * 
 */
<template>
	<div class="question">
		<div class="question-header">
			<h1>
				<i class="el-icon-question" />
				{{detailSetting.title}}
				<i class="el-icon-edit" @click="handleClose">修改</i>
				<el-button class="fl-r" @click="goBack" type="primary">返回</el-button>
				
			</h1> 
			 <el-collapse accordion v-if="detailSetting.content!== ''">
				<el-collapse-item>
					<template slot="title">
					  展开内容
					</template>
					<div>{{detailSetting.content}}</div>
				</el-collapse-item>
			</el-collapse>
			<span class="question-date">{{`${this.momentchange(detailSetting.date).startOf('minutes').fromNow()}${dataFlag}`}}</span>
			<popForm 
				v-if="show"
				:theme="theme"
				:form="form"
				:editComponent="editComponent"
				@handleClose="handleClose"
				@submit="submit(form)"/>
		</div>
	</div>
</template> 

<script>
import popForm from '../../components/public/popForm'
import msg from '../formMsg'
	export default {
		data () {
			return {
				detailSetting: {
					title: '',
					content: '',
					date: ''
				},
				show: false,
				theme: '修改问题',
				dataFlag: '发布',
				form: {
					title: '',
					content: ''
				},
				editComponent: msg.questionComponent,
				problem_id: this.$route.params.id
			}
		},
		methods: {
			// 处理时间
			// moment (data) {
			// 	return moment(data)
			// },
		    removeHtml(html) {
		    	return html.replace(/<.*?>/ig,"")
		    },
			getMsg () {
				const model = this.$route.params.model
				this.ajaxGet(global[model].showById + '/' + this.problem_id, res=>{
					let data = res.data
					this.detailSetting.title = data.title
					this.detailSetting.date = data.updatedAt
					this.detailSetting.content = this.removeHtml(data.content)
					this.form.title = data.title
					this.form.content = data.content
					this.dataFlag = (data.date === data.updatedAt) ? '发布' : '更新'
				})
			},
			handleClose() {
				this.show = !this.show
			},
			submit(form) {
				console.log(form);
				this.ajaxPost(question.updateById + '/' + this.problem_id, form, res => {
					return new Promise((resolve, reject)=>{
						this.handleClose()
						resolve()
					}).then(res=>{
						this.getMsg()
					}).catch(err => {
						console.log(err)
					})
				})
			},
			goBack () {
				this.$router.go(-1)
			}
		},
		mounted() {
			this.getMsg()
			console.log(this.$route);
		},
		components: {
			popForm
		},
		// 处理时间可以使用过滤器
		filters: {
			// moment (date) {
			// 	return moment(date).startOf('minutes').fromNow()
			// }
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