<template>
	<div class="question">
		<div class="question-header">
			<h1>
				<i class="el-icon-question" />
				{{title}}
				<i class="el-icon-edit" @click="editQuestion">修改</i>
			</h1>
			 <el-collapse accordion v-if="content!== ''">
				<el-collapse-item>
					<template slot="title">
					  展开内容
					</template>
					<div>{{content}}</div>
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
	export default {
		data () {
			return {
				title: '',
				content: '',
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
			html (str) {
				 str = str.replace(/&/g, '&amp;');
        str = str.replace(/</g, '&lt;');
        str = str.replace(/>/g, '&gt;');
        str = str.replace(/"/g, '&quot;');
        str = str.replace(/'/g, '&#039;');
        return str;
			},
			hm(str){
				str = str.replace(/&amp;/g, '&');
        str = str.replace(/&lt;/g, '<');
        str = str.replace(/&gt;/g, '>');
        str = str.replace(/&quot;/g, "''");
        str = str.replace(/&#039;/g, "'");
        return str;
    },
    remo(str) {
    	return str.replace(/<[^>]+>/g,"")
    },
			getMsg () {
				this.ajaxGet(question.showById + '/' + this.problem_id, res=>{
					this.title = res.data.title
					this.content = this.remo(res.data.content)
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
			}
		},
		mounted() {
			this.getMsg()
			console.log(this.form);
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