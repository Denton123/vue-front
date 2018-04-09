<template>
    <div>
        <el-container>
            <el-header class="Header">
                <my-header />
            </el-header>
            <el-main class="Main">
                <router-view />
            </el-main>
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
.el-header{
    padding: 0;
}
    .Header{
        width: 100%;
        line-height: 50px;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
    }
    .Main{
        width: 70%;
        margin: 0 auto;
    }
</style>
