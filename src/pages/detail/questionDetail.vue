<template>
	<div class="question">
		<div class="question-header">
			<h1>
				<i class="el-icon-question" />
				{{detailSetting.title}}
				<i class="el-icon-edit" @click="editQuestion">修改</i>
				<el-button class="fl-r" @click="goBack" type="primary">返回</el-button>
				<span>{{moment(detailSetting.date).startOf('minutes').fromNow()}}</span>
			</h1>
			 <el-collapse accordion v-if="detailSetting.content!== ''">
				<el-collapse-item>
					<template slot="title">
					  展开内容
					</template>
					<div>{{detailSetting.content}}</div>
				</el-collapse-item>
			</el-collapse>
			<popForm 
				v-if="show"
				:theme="theme"
				:form="form"
				:editComponent="editComponent"
				@editQuestion="editQuestion"
				@submit="submit(form)"/>
		</div>
	</div>
</template> 

<script>
import popForm from '../../components/public/popForm'
import msg from '../formMsg'
import moment from 'moment'
	export default {
		data () {
			return {
				detailSetting: {
					title: '',
					content: '',
					date: ''
				},
				show: false,
				theme: '问题',
				form: {
					title: '',
					content: ''
				},
				editComponent: msg.editComponent,
				problem_id: this.$route.params.id
			}
		},
		methods: {
			// 处理时间
			moment (data) {
				return moment(data)
			},
		    removeHtml(html) {
		    	return html.replace(/<.*?>/ig,"")
		    },
			getMsg () {
				this.ajaxGet(question.showById + '/' + this.problem_id, res=>{
					console.log(res)
					this.detailSetting.title = res.data.title
					this.detailSetting.date = res.data.updatedAt
					this.detailSetting.content = this.removeHtml(res.data.content)
					this.form.title = res.data.title
					this.form.content = res.data.content
				})
			},
			editQuestion() {
				this.show = !this.show
			},
			submit(form) {
				this.ajaxPost(question.updateById + '/' + this.problem_id, form, res => {
					return new Promise((resolve, reject)=>{
						resolve(this.editQuestion())
					}).then(res=>{
						this.getMsg()
					})
				})
			},
			goBack () {
				this.$router.go(-1)
			}
		},
		mounted() {
			this.getMsg()
			console.log(this.form);
		},
		components: {
			popForm
		},
		// 处理时间可以使用过滤器
		filters: {
			moment (date) {
				return moment(date).startOf('minutes').fromNow()
			}
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