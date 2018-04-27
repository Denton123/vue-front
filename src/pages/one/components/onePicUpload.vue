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
            <el-button v-if="show" size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
export default {
    props: {
        file_list: []
    },
  data () {
    return {
        show: true,
        action: idea.store + '/' + id
    }
  },
    methods: {
        handleRemove(file, fileList) {
            this.show = true
            console.log(file, fileList);
        },
        handleAvatarSuccess(res, file, fileList) {
            console.log(res);
            console.log(file);
            this.$emit('put', file.raw.name)
            if (file.raw) {
                this.show = false
            }
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
