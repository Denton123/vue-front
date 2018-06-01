/**
 * 
 * one模块组件
 * @author 舒丹彤 
 * @date 2018/04/27
 * 
 */
<template>
    <div class="one">
        <h2 class="one-header">We Had Today</h2>
        <slide :infoData="infoData" :slideParams="slideParams" />
    </div>
</template>

<script>
import slide from './components/slideShow.vue'
export default {
    props: {
    },
    data () {
        return {
            infoData: {},
            slideParams: {
                height: '450px',
                indicator: 'none'
            }
        }
    },
    methods: {
        getMsg () {
            this.ajaxGet(idea.index, res => {
                this.infoData = res.data.data
            })
        }
    },
  mounted () {
    this.getMsg()
    console.log(this.$root);
  },
  computed: {
    
  },
    components: {
        slide
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
