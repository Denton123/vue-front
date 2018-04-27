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
        <slide />
    </div>
</template>

<script>
import slide from './components/slideShow.vue'
export default {
    props: {
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
