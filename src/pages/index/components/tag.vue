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
import popFormMsg from '../../formMsg.js'
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
        form: {}
    }
  },
  methods: {
    handleClick (model) {
        if (model.popFlag) {
            this.popData['show'] = true
            this.popData['theme'] = `写下你的${model.label}`
            this.popData['name'] = model.name
            let component = `${model.name}Component`
            Object.keys(popFormMsg).forEach(v => {
                if (v == component) {
                    this.addComponent = popFormMsg[v]
                }
            })
            this.extractObj(this.addComponent)
        }
    },
    handleClose () {
        this.popData.show = !this.popData.show
    },
    submit (form) {
        let name = this.popData['name']
        this.ajaxPost(global[name].store + '/' + id, form, res => {
            res.data === 'success' ?  this.$message.success('问题发布成功') : this.$message.error('问题发布失败');
            this.handleClose()
        })
    },
    // 抽出form的field
    extractObj (obj) {
        let form = {}
        obj.forEach(i => {
            form[i.name] = ''
        })
        this.form = form
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
