/**
 * 
 * 基础模块组件
 * @author 舒丹彤 
 * @date 2018/04/26
 * 
 */
<template>
    <div>
        <el-container>
            <el-header class="Header">
                <my-header />
            </el-header>
            <el-main class="Main">
                <!-- keep-alive保存状态 -->
                <keep-alive>
                    <router-view />
                </keep-alive>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import myHeader from '../../components/public/header.vue'
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
        myHeader,
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped> 
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
        overflow: hidden;
    }
</style>
