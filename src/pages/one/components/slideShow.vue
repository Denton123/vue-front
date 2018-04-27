/**
 * 
 * 轮播图组件
 * @author 舒丹彤 
 * @date 2018/04/27
 * 
 */
<template>
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in data" :key="item">
             <img :src="`/uploadImgs/${item.pic}`" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    props: {
    },
  data () {
    return {
        data: []
    }
  },
  methods: {
    get() {
        this.ajaxGet(idea.index, res => {
            console.log(res);
            this.data = res.data
        })
    }
  },
  mounted () {
    this.get()
  },
  computed: {
    
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
