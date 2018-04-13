<template>
    <div>
        <div class="form" v-if="formShow">
            <div class="form-wrap">
                <span @click="handleClose">
                    <Icon type="close" class="form-icon-close"/>
                </span>
                <h1 class="form-title mr-bottom">{{`修改${theme}`}}</h1>
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
                            :prop="form.title"
                            v-if="item.type==='text'"
                            :label="item.label">
                            <el-input 
                                v-model="form.title"
                                :placeholder="item.placeholder" />
                        </el-form-item>

                        <!-- 编辑器 -->
                        <el-form-item 
                            :prop="form.content"
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
                                v-model="form.content" 
                                :placeholder="item.placeholder" />
                             <quill-editor v-else 
                                v-model="form.content" 
                                :placeholder="item.placeholder"/>
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
        rules: {},
    }
  },
  props: {
    theme: '',
    form: {},
    editComponent: {
        type: Array,
        default: []
    }
  },
  methods: {
    toggleTool() {
        this.showInp = !this.showInp
    },
    handleClose() {
        this.$emit('editQuestion')
    },
    submitForm(formName) {
        // console.log(this.$refs[formName]);
        this.$refs[formName].validate((valid) => {
            // console.log(valid);
            if (valid) {
                this.$emit('submit', formName)
            } else {
                console.log('error submit!!');
                return false;
            }
        })
    }
  },
  mounted () {
    var rules = {}
    this.editComponent.forEach(item => {
        rules[item.name] = item.rules
    })
    this.rules = rules
    console.log(this.form);
  },
  computed: {
    
  },
  components: {
  }
}
</script>

<style lang="scss">
.form{
    position: fixed;
    width:100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    top:0;
    left:0;
    z-index:2000;
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
</style>
