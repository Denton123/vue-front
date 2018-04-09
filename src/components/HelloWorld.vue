<template>
    <div>
        <el-container>
            <el-header class="Header">
                <my-header></my-header>
            </el-header>
            <el-main class="Main">Main</el-main>
        </el-container>
    </div>
</template>

<script>
import func from '../utils/func.js'
import api from '../utils/api.js'
import myHeader from './public/header.vue'
export default {
  name: 'HelloWorld',
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
    myHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .Header{
        width: 100%;
        line-height: 50px;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        // &-inner{
        //     width: 80%;
        //     margin: 0 auto;
        //     height: 100%;
        // }
        // &-mine{
        //     float: right;
        //     height: 100%;
        //     .el-dropdown{
        //         top: 4px;
        //     }
        // }
    }
</style>
