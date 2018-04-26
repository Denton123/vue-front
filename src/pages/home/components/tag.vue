/**
 * 
 * 首页标签模块组件
 * @author 舒丹彤 
 * @date 2018/04/26
 * 
 */
<template>
    <div class="tag">
        <ul>
            <li 
                v-for="(model, index) in models"
                :key="index"
                @click="handleClick(model)">
                <i :class="model.blankIcon" />
                {{model.label}}
            </li>
        </ul>
        <popForm
            v-if="popData.show"
            :theme="popData.theme"
            :form="form"
            :editComponent="addComponent"
            @handleClose="handleClose"
            @submit="submit(form)"  />
    </div>
</template>

<script>
import msg from '../../mine/message'
import popForm from '../../../components/public/popForm'
import popFormMsg from '../../formMsg'
export default {
  data () {
    let obj = {}
    Object.assign(obj, msg)
    return {
        models: obj,
        popData: {
            show: false,
            theme: ''
        },
        addComponent: [],
        form: {
            title: '',
            content: ''
        },
    }
  },
  methods: {
    handleClick (model) {
        if (model.popFlag) {
            console.log(popFormMsg);
            this.popData.show = true
            this.popData.theme = `写下你的${model.label}`
            let coms = model.name + 'Component'
            this.addComponent = popFormMsg['coms']
            console.log(this.addComponent);
        }
    },
    handleClose () {
        this.popData.show = !this.popData.show
    }
  },
  mounted () {
  },
  computed: {
    
  },
  components: {
    popForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .tag{
    background: #fff;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    border-radius: 2px;
  }
</style>
