<template>
	<div class="Header-inner">
        <div class="Header-mine">
                <el-dropdown>
                    <!-- <img   v-if="imageUrl !== null"> -->
                    <Avatar icon="person" size="large" :src="imageUrl"/>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <Icon type="person" />
                                <span @click="change">我的主页</span>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <Icon type="android-settings" />
                        		<span>设置</span>
                        </el-dropdown-item>
                        <el-dropdown-item>
                        	<Icon type="log-out" />
                        	<span @click="logout">退出</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
        </div>
    </div>
</template>

<script>
	export default{
		data () {
			return {
                imageUrl: null
			}
		},
		methods: {
			change () {
				this.$router.push('/mine')
			},
			logout () {
				this.ajaxGet(users.logout, res => {
					console.log(res);
					if (res.data === 'OK') {
						setTimeout(()=>{
							this.$router.push('/login')
						}, 1000)
					}
				})
			},
            getUser() {
                var userId = localStorage.getItem('user')
                this.ajaxGet(users.findUser + '/' + userId, res=> {
                    if (res.data.avatar !== null) {
                        this.imageUrl = '/uploadImgs/' + res.data.avatar
                    }
                })
            }
		},
        mounted () {
            this.getUser()
            console.log(this.imageUrl);
        }
	}
</script>

<style lang="scss">
	.Header{
        &-inner{
            width: 60%;
            margin: 0 auto;
            height: 100%;
        }
        &-mine{
            float: right;
            height: 100%;
            .el-dropdown{
                top: 4px;
                &-menu__item{
                	span{
                		padding-left: 20px;
                	}
                }
            }
        }
    }
</style>