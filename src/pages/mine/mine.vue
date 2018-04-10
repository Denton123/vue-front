<template>
		<div class="mine">
			<div class="mine-head">
			<img src="../../../static/image/mine-bg.jpg" class="mine-head-bg">
			<div class="mine-head-avatar">
				<el-upload
					class="upload-demo"
					:action="uploadApi"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<Avatar 
						icon="person" 
						size="large" 
						:src="imageUrl"/>
				</el-upload>
			</div>
			<div class="mine-head-info">
				<h2>{{userName}}</h2>
				<h2>{{des}}</h2>
			</div>
			<div class="mine-head-edit">
				<el-button type="primary" plain @click="toEdit">编辑个人信息</el-button>
			</div>
		</div>
		<router-view />
	</div>
</template>

<script>
import axios from 'axios'

	export default {
		data() {
			return {
				userName: '',
				imageUrl: '',
				uploadApi: '',
				des: ''
			}
		},
		methods: {
			getUser() {
				var userId = localStorage.getItem('user')
				this.uploadApi = users.update + '/' + userId
				this.ajaxGet(users.findUser + '/' + userId, res=> {
					console.log(res);
					this.userName = res.data.name
					this.des = res.data.introduction
					if (res.data.avatar !== null) {
						this.imageUrl = '/uploadImgs/' + res.data.avatar
					}
				})
			},
			// 图片上传之前
			beforeAvatarUpload(file) {
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isLt2M;
		    },
		    // 上传完成之后的回调
		    handleAvatarSuccess(res, file, fileList) {
		    	// res 可以拿到后台返回的数据
		    	console.log(res);
	        	this.imageUrl = '/uploadImgs/' + res.avatar
	      	},
	      	toEdit () {
	      		this.$router.push('/mine/edit')
	      	}
		},
		computed: {

		},
		mounted() {
			this.getUser()
		}
	}
</script>

<style lang="scss">
	.mine{
		&-head{
			background: #fff;
			width: 100%;
			position: relative;
			height: 377px;
			box-shadow: 0 1px 3px rgba(26,26,26,.1);
			border-radius: 2px;
			&-bg{
				width: inherit;
				height: 250px;
			}
			&-avatar{
				position: absolute;
				left: 28px;
				top: 194px;
				margin-bottom: 50px;
				padding: 5px;
				background: #fff;
				border-radius: 13px;
				.ivu-avatar-large, img{
					width: 131px;
					height: 131px;
					border-radius: 8px;
					line-height: 131px;
					font-size: 80px;
				}
			}
			&-info{
				float: left;
				margin-left: 200px;
			}
			&-edit{
				float: right;
				padding: 32px 32px 0 0;
			}
			
		}
	}
</style>