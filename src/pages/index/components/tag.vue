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
                :class="liClass"
                @click="handleClick(model)">
                    <img 
                        class="imgIcon"
                        v-if="model.imgIcon" 
                        :src="`../../../../static/image/tag/${model.imgIcon}.png`">
                    <i v-else :class="model.blankIcon" />
                    {{model.label}}
            </li>
        </ul>
        <popForm
            v-if="popData.show" 
            :theme="popData.theme"
            :form="form"
            :editComponent="addComponent"
            @handleClose="handleClose"
            @put="put"
            @submit="submit(form)"  />
    </div>
</template>

<script>
import msg from '../../mine/message'
import popForm from '../../../components/public/popForm'
import popFormMsg from '../../formMsg.js'
export default {
    props: {
        liClass: '',
        models: {}
    },
  data () {
    return {
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
        } else {
            if(model.toUrl) {
                this.$router.push(`/${model.toUrl}`)
            }
        }
    },
    handleClose () {
        this.popData.show = !this.popData.show
    },
    submit (form) {
        console.log(form);
        let name = this.popData['name']
        this.ajaxPost(global[name].store + '/' + id, form, res => {
            console.log(res);
            // res.data === 'success' ?  this.$message.success('问题发布成功') : this.$message.error('问题发布失败');
            // this.handleClose()
        })
    },
    // 抽出form的field
    extractObj (obj) {
        let form = {}
        obj.forEach(i => {
            if (i.name === 'pic') {
                form[i.name] = 'fc891dde2b40257b7102c9f1cd8c0976.jpg'
            } else {
                form[i.name] = ''
            }
        })
        this.form = form
    },
    put(val) {
        console.log(val);
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

<style lang="scss" scoped>
  .tag{
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    border-radius: 2px;
    .imgIcon{
        display: block;
        margin: 0 auto;
    }
  }
  .liClass{
        margin-right: 0px;
        display: inline-block;
        width: 33.3%;
        text-align: center;
    }
</style>
