<template>
		<div class="mine">
			<div class="mine-head bg-fff">
				<div 
					class="mine-head-bg"
					:style="{backgroundImage: `url(${bg})`}">
					<el-upload
						class="upload-demo"
						:action="uploadBgApi"
						:show-file-list="false"
						:on-success="handleBgSuccess"
						:before-upload="beforeBgUpload">
						<el-button type="info">
							<Icon type="android-camera" />
							编辑封面图片
						</el-button>
					</el-upload>
				</div>
				<div class="mine-head-avatar bg-fff">
					<el-upload
						class="upload-demo"
						:action="uploadApi"
						:show-file-list="false"
						:on-success="handleAvatarSuccess"
						:before-upload="beforeAvatarUpload">
							<Avatar
							:src="imageUrl"
							icon="person" 
							size="large"/>
					</el-upload>
				</div>
				<div class="mine-head-info">
					<h1>{{userName}}</h1>
					<h2>{{des}}</h2>
				</div>
				<div class="mine-head-edit">
					
					<el-button 
						v-if="this.$route.path.indexOf('edit')!==-1"
						type="primary" 
						plain 
						@click="toMine"
						>返回我的主页
						<i class="el-icon-arrow-right el-icon--right"/>
					</el-button>
					<el-button 
						v-else
						type="primary" 
						plain
						@click="toEdit">
						编辑个人信息
					</el-button>
				</div>
			</div>
		<router-view />
	</div>
</template>

<script>
import axios from 'axios'
import myChild from './mine-child.vue'
	export default {
		data() {
			return {
				userName: '',
				imageUrl: '',
				uploadApi: '',
				uploadBgApi: '',
				des: '',
				bg: require('../../../static/image/mine-bg.jpg')
			}
		},
		methods: {
			getUser() {
				var userId = localStorage.getItem('user')
				this.uploadApi = users.update + '/' + userId + '/' + 'avatar'
				this.uploadBgApi = users.update + '/' + userId + '/' + 'bg'
				this.ajaxGet(users.findUser + '/' + userId, res=> {
					this.userName = res.data.name
					this.des = res.data.introduction
					if (res.data.avatar !== null) {
						this.imageUrl = '/uploadImgs/' + res.data.avatar
						this.bg = '/uploadImgs/' + res.data.bg
					}
				})
			},
			// 头像上传之前
			beforeAvatarUpload(file) {
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传头像大小不能超过 2MB!');
		        }
		        return isLt2M;
		    },
		    // 头像上传完成之后的回调
		    handleAvatarSuccess(res, file, fileList) {
		    	// res 可以拿到后台返回的数据
		    	console.log(res);
	        	this.imageUrl = '/uploadImgs/' + res.avatar
	      	},
	      	toEdit () {
	      		this.$router.push('/mine/edit')
	      	},
	      	toMine () {
	      		this.$router.push('/mine/model/dynamic')
	      	},
	      	changeInfo () {
	      		this.getUser()
	      	},
	      	// 背景图片上传成功回调
	      	handleBgSuccess (res, file, fileList) {
	      		this.bg = '/uploadImgs/' + res.bg
	      	},
	      	// 背景图片上传之前
	      	beforeBgUpload(file) {
	      		console.log(file);
		        const isLt2M = file.size > 1024 * 100;
		        if (!isLt2M) {
		          this.$message.error('请上传图片宽大于1200px,高大于240px');
		        }
		        return isLt2M;
		    },
		},
		computed: {

		},
		mounted() {
			this.getUser()
		},
		components: {
			myChild
		}
	}
</script>

<style lang="scss">
	.mine{
		&-head{
			width: 100%;
			position: relative;
			height: 377px;
			box-shadow: 0 1px 3px rgba(26,26,26,.1);
			border-radius: 2px;
			&-bg{
				width: 100%;
				height: 250px;
				position: relative;
				img{
					width: inherit;
					height: inherit;
				}
				.el-button{
					position: absolute;
					right: 20px;
					top: 40px;
				}
			}
			&-avatar{
				position: absolute;
				left: 28px;
				top: 194px;
				margin-bottom: 50px;
				padding: 5px;
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
				margin-top: 2px;
				line-height: 38px;
			}
			&-edit{
				float: right;
				padding: 32px 32px 0 0;
			}
			
		}
	}
</style>