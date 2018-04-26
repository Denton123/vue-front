/**
 * 
 * 首页模块组件
 * @author 舒丹彤 
 * @date 2018/04/26
 * 
 */
<template>
    <div>
        <tag />
    </div>
</template>

<script>
import tag from './components/tag.vue'
export default {
  data () {
    return {
      
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.el-container{
  width: 100%;
  height: 100%;
  background: #f6f6f6;
}
.el-header{
    padding: 0;
    background: #fff;
}
    .Header{
        width: 100%;
        line-height: 50px;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
    }
    .Main{
        width: 60%;
        padding: 20px 0px;
        margin: 0 auto;
    }
</style>
