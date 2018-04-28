<template>
    <div>
        <div class="pop" v-if="formShow" @click.capture="hidePop">
            <div class="form-wrap">
                <span @click="handleClose">
                    <Icon type="close" class="form-icon-close"/>
                </span>
                <h1 class="form-title mr-bottom">{{`${theme}`}}</h1>
                <el-form 
                    ref="form"
                    :model="form"
                    :rules="rules"
                    label-width="80px">
                    <div
                    :key="index"
                    v-for="(item, index) in editComponent">

                    <!-- 文本 -->
                        <el-form-item 
                            v-if="item.type==='text'"
                            :label="item.label">
                            <el-input
                                v-model="form[item.name]"
                                :placeholder="item.placeholder" />
                        </el-form-item>

                        <!-- 编辑器 -->
                        <el-form-item 
                            v-if="item.type==='editor'"
                            :label="item.label">
                            <el-tooltip class="item" effect="dark" :content="showInp ? '展开工具栏' : '收起工具栏'" placement="bottom">
                                <a @click="toggleTool">
                                      <Icon 
                                        size="18"
                                        type="android-options"
                                        /> 
                                </a>   
                            </el-tooltip>
                            <el-input v-if="showInp" 
                                v-model="form[item.name]" 
                                :placeholder="item.placeholder" />
                             <quill-editor v-else 
                                v-model="form[item.name]"
                                :file-list="form[item.name]"
                                :placeholder="item.placeholder"/>
                        </el-form-item>

                        <!-- 上传图片 -->
                        <el-form-item
                            v-if="item.type==='upload'"
                            :label="item.label">
                            <!-- <component
                                :src="`/uploadImgs/${form[item.name]}`"
                                v-model="form[item.name]"
                                :is="item.uploadComponent"/> -->
                            <el-upload
                                class="uploadImg"
                                :action="action"
                                :show-file-list="false"
                                :before-upload="beforeImgUpload"
                                :on-success="handleAvatarSuccess"
                               >
                                <img 
                                    v-if="form[item.name]" 
                                    :src="'/uploadImgs/' + form[item.name]"
                                    class="uploadImg-img">
                               <i v-else class="el-icon-plus uploadImg-icon"></i>
                            </el-upload>    
                        </el-form-item>

                    </div>
                    <!-- 操作按钮 -->
                   <el-form-item>
                        <el-button type="primary"  @click="submitForm('form')">确定</el-button>
                        <el-button @click="handleClose">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        showInp: true,
        formShow: true,
        // rules: {},
    }
  },
  props: {
    theme: '',
    form: {},
    editComponent: {
        type: Array,
        default : () => {
            return []
        }
    },
    action: '',
    rules: {}
  },
  methods: {
    toggleTool() {
        this.showInp = !this.showInp
    },
    handleClose() {
        this.$emit('handleClose')
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$emit('submit', formName)
            } else {
                console.log('error submit!!');
                return false;
            }
        })
    },
    hidePop (event) {
        if (event.target.className.indexOf('pop')  !== -1) {
            this.$emit('handleClose')
        }
    },
    handleAvatarSuccess(res, file, fileList){
        console.log(res);
        if (res.status == 1) {
            this.form['pic'] = res.image_path
        }else{
            this.$message.error('上传图片失败！');
        }
    },
    beforeImgUpload (file) {
        console.log(file.size);
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB')
        }
        return isLt2M
    }
  },
  mounted () {
    // var rules = {}
    // this.editComponent.forEach(item => {
    //     rules[item.name] = item.rules
    // })
    // this.rules = rules
  },
  computed: { 
    
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.pop{
    position: fixed;
    width:100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    top:0;
    left:0;
    z-index:2000;
    
}
.form{
    &-title{
        text-align: center;
        font-weight: normal;
    }
    &-wrap{
        width:50%;
        max-width:50%;
        padding: 40px;
        left:25%;
        top:25%;
        position: absolute;
        background:white;
        box-shadow:1px 1px 50px rgba(0,0,0,.3);
        border-radius:2px;  
        // height:50%;
        // max-height: 50%;
    }
    &-icon-close{
        font-size: 20px;
        position: absolute;
        top: 20px;
        right: 20px;
    }
    
}
.uploadImg{
    width: 150px;
    height: 150px;
    border: 1px dashed #d9d9d9;
    float: left;
    border-radius: 6px;
    cursor: pointer;
    &:hover{
        border-color: #20a0ff;
    }
    &-img{
        width: 150px;
        height: 150px;
    }
    &-icon{
        font-size: 28px;
        color: #8c939d;
        width: 150px;
        height: 150px;
        line-height: 150px;
        text-align: center;
    }
}
.uploadImg {
        width: 150px;
        height: 150px;
    }
.el-upload{
        width: 150px;
        height: 150px;
        border: 2px dotted #409eff91;
        float: left;
    }
</style>
