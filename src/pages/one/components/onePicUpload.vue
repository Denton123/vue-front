/**
 * 
 * 单一图片上传组件
 * @author 舒丹彤 
 * @date 2018/04/27
 * 
 */
<template>
    <div class="">
        <el-upload
            class="upload-demo"
            :action="action"
            :on-remove="handleRemove"
            :on-success="handleAvatarSuccess"
            list-type="picture">
            <img :src="src" alt="" v-if="src">
            <el-button v-else size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
export default {
    props: {
        file_list: [],
        src: ''
    },
  data () {
    return {
        show: true,
        action: 'api/post'
    }
  },
    methods: {
        handleRemove(file, fileList) {
            this.show = true
            console.log(file, fileList);
        },
        handleAvatarSuccess(res, file, fileList) {
            if (file.raw) {
                this.show = false
            }
            this.$store.state.common.file = file.raw
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

<style lang="scss" scoped>
  .one{
    &-header{
        padding: 20px;
        background: #3e3f40;
        color: #fff;
        border-radius: 5px;
    }
    }
</style>
