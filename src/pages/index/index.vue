/**
 * 
 * 首页模块组件
 * @author 舒丹彤 
 * @date 2018/04/26
 * 
 */
<template>
    <div class="index">
        <div class="index-left-tag">
            <tag
                :models="tagModels" />
        </div>
        <div class="index-right-tag">
            <tag
                :models="extractModels"
                :liClass="liClass" />
        </div>
        
    </div>
</template>

<script>
import tag from './components/tag.vue'
import msg from '../mine/message'
export default {
  data () {
    let obj = {}
    let extractObj = {}
    return {
        tagModels: Object.assign(obj, msg.tag),
        extractModels: Object.assign(extractObj, msg.extractTag),
        liClass: 'liClass'
    }
  },
  methods: {

  },
  mounted () {
  },
  computed: {
    
  },
  components: {
    tag
  }
}
</script>

<style lang="scss" scoped>
    .index{
        display: flex;
        overflow: hidden;
        &-left-tag{
            width: 65%;
            margin-right: 5%;
        }
        &-right-tag {
            width: calc(100% - 70%);
        }
        .liClass{
            background: red;
        }
    }
</style>
