/**
 * 
 * 轮播图组件
 * @author 舒丹彤  
 * @date 2018/04/27
 * 
 */
<template>
    <div>
        <el-carousel :height="slideParams.height" :autoplay='false' style="overflow: hidden;margin-top: 6px;" :indicator-position="slideParams.indicator">
            <el-carousel-item v-for="(item,index) in infoData" :key="item.id">
               <img :src="item.pic ? `/uploadImgs/${item.pic}` : item.img" class="slideImg">
                <div class="desc" v-if="item.title">
                    <div class="word">
                        <h2>{{item.title}}</h2>
                        <span>{{item.createdAt}}</span>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    props: {
        infoData: {},
        slideParams: {}
    },
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
  .el-carousel__item{
    display: block;
    background: none;
  }
  .slideImg{
    width: 100%;
    height: 400px;
  }
  .desc{
    height: 50px;
    .word{
        background:#000;
        color: #fff;
        font-size: 14px;
        padding: 3px 0;
        height: 50px;
        line-height: 41px;
        h2{
            float: left;
            padding-left: 20px;
        }
        span{
            float: right;
            padding-right: 20px;
        }
    }
  }
</style>
