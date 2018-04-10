<template>
    <div class="mine-edit">
        <el-form 
            :model="editForm" :rules="rules" ref="editForm" label-width="100px" class="mine-edit-editForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="editForm.name"></el-input>
            </el-form-item>
  

            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="editForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="简介" prop="desc">
                <el-input type="textarea" v-model="editForm.desc"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('editForm')">保存</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
        editForm: {
            name: '',
            sex: '',
            desc: ''
        },
        rules: {
            name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur' }
            ],
            resource: [
                { message: '请选择性别', trigger: 'change' }
            ],
            desc: [
                { message: '请填写活动形式', trigger: 'blur' }
            ]
        }
    }
  },
  methods: {
    submitForm(formName) {
        this.editForm['sex'] = (this.editForm['sex'] === '女') ? 'female' : 'male'
        this.$refs[formName].validate((valid) => {
            if(valid) {
                var userId = localStorage.getItem('user')
                this.ajaxPost(users.update + '/' + userId, this.editForm, res=>{
                    console.log(res);
                    this.editForm['sex'] = (this.editForm['sex'] === 'female') ? '女' : '男'
                })
            }
        })
    }
  },
  mounted () {
  },
  computed: {
    
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .mine-edit{
      background: #fff;
      margin-top: 20px;
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
      border-radius: 2px;
        &-editForm{
            width: 60%;
            padding: 30px 0;
            margin: 0 auto;
            .el-form-item__content{
                text-align: left;
            }
        }

    }
</style>
