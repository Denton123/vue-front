<template>
	<div class="Header-inner">
        <div class="Header-logo">
            <router-link to="/index" tag="h2" exact>南飞</router-link>
        </div>
        <div class="Header-mine">
                <el-dropdown>
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
    // commonjs引入
    // import foo from './test3.js'
    import * as baz from './test3'
	export default{
		data () {
			return {
                imageUrl: null
			}
		},
		methods: {
			change () {
				this.$router.push('/mine/model/dynamic')
                // import的动态加载
                import('./test.js')
                    .then(({default: o}) => {
                        console.log(o);
                    })
                // 按需加载多个
                Promise.all([
                    import('./test.js'),
                    import('./test2.js')
                    ])
                .then(([module1, module2]) => {
                    console.log(module1);
                    console.log(module2);
                })
                console.log(baz);
                console.log(baz);
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
            // console.log(this.imageUrl);
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
        &-logo{
            float: left;
            line-height: 57px;
            font-size: 16px;
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