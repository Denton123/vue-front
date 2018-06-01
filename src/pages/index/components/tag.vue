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
            :theme="`写下你的${popData.theme}`"
            :form="form"
            :rules="rules"
            :action="action"
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
        form: {},
        action: '',
        rules: {}
    }
  },
  methods: {
    handleClick (model) {
        console.log(model);
        if (model.popFlag) {
            this.popData['show'] = true 
            this.popData['theme'] = model.label
            this.popData['name'] = model.name
            this.action = global[model.name].uploadImg
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
        this.addComponent.forEach(item => {
            this.rules[item.name] = item.rules
        })
    },
    handleClose () {
        this.popData.show = !this.popData.show
    },
    submit (form) {
        Object.assign(form, {
            user_id: localStorage.getItem('user')
        })
        console.log(form);
        let name = this.popData['name']
        this.ajaxPost(global[name].store, form, res => {
            console.log(res);
            if (res.data === 'success') {
                this.$message.success(`${this.popData['theme']}发布成功`)
                this.handleClose()
            } else {
                this.$message.error(`${res.data.errors[0].message}发布失败`)
            }
        })
    },
    // 抽出form的field
    extractObj (obj) {
        let form = {}
        obj.forEach(i => {
            form[i.name] = ''
        })
        this.form = form
    },
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
