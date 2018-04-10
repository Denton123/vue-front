<template>
	<div class="login">
		 <el-form
		 		:model="formInline" 
                :rules="rules"
                ref="formInline"
		 		class="demo-form-inline">
			  <el-form-item label="Username" prop="username">
			      <el-input 
                        v-model="formInline.username" 
                        placeholder="Username" />
			  </el-form-item>
              <el-form-item label="Password" prop="password">
                  <el-input 
                        v-model="formInline.password" 
                        placeholder="Password" />
              </el-form-item>
              <el-form-item>
                <el-button 
                    type="primary" 
                    @click="onSubmit('formInline')">Login</el-button>
                <el-button 
                    type="primary" 
                    @click="onRegister('formInline')">Register</el-button>
              </el-form-item>
        </el-form>
	</div>
</template>

<script>
// import func from '../utils/func.js'
import api from '../utils/api.js'
	export default {
		data() {
			return {
				formInline: {
		          user: 'hah',
		          password: ''
		        },
                rules: {
                    username: [
                        { message: '请输入用户名', trigger: 'blur'},
                        { min: 4, max: 16, message: '用户名长度为4到16位', trigger: 'blur' }
                    ],
                    password: [
                        { message: '请输入密码', trigger: 'blur'},
                        { min: 3, max: 9, message: '密码长度不少于9位，必须包含字母和数字', trigger: 'blur' }
                    ]
                }
			}
		},
		methods: {
			onSubmit(formName) {
	           this.$refs[formName].validate((valid)=>{
                    if (valid) {
                        var that = this
                        this.ajaxPost(users.login, this.formInline, res => {
                            console.log(res);
                            if (res.data !== 'error') {
                                this.$message.success('登录成功')
                                this.$store.state.type = true
                                // let user = JSON.stringify(res.data.id)
                                localStorage.setItem('user', res.data.id)
                                setTimeout(()=>{
                                    this.$router.push('/mine')
                                }, 3500)
                            } else {
                                this.$message.error('用户名或者密码错误')
                            }
                        })
                    } else {
                        return false
                    }
                })
	        },
            onRegister(formName) {
                this.$refs[formName].validate((valid)=>{
                    if (valid) {
                        this.ajaxPost(users.register, this.formInline, res => {
                            console.log(res);
                            if (res.data === 200) {
                                this.$message.success('注册成功')
                            } else if(res.data === "用户名已存在") {
                                this.$message.error(res.data)
                            } else {
                                this.$message.error(res.data.errors[0].message)
                            }
                        })
                    } else {
                        return false
                    }
                })
            }
	   }
	}
</script>

<style lang="scss">
	.login{
		width: 400px;
		height: 400px;
		margin: 0 auto;
	}
</style>



