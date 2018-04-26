<template>
	<div class="mine-child mr-top bg-fff">
		<div>
			<el-tabs v-model="activeName" @tab-click="handleClick">
		    	<el-tab-pane v-for="(model, index) in models" :label="model.label" :name="model.name" :key="index">
		    		<component
		    			:is="model.cardComponent"
		    			:listData="listData"
		    			:model="model"
		    			/>
					<pagination
						v-if="listData.length > 0"
						:pageData="pageData"
						@handleCurrentChange="handleCurrentChange" />
		    	</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
import message from './message.js'
import pagination from '../../components/public/pagination'
	export default {
		data () {
			let obj = {}
			Object.assign(obj, message)
			return {
				activeName: '',
				models: obj,
				listData: {},
				modelFlag: this.$route.params.model,
				pageData: {
					currentPage: 1,
					pageSize: 1,
					total: 1
				}
			}
		},
		props: {
			
		},
		methods: {
			// 点击tab触发
			handleClick (tab, event) {
				this.listData = {}
				this.getMsg(tab.name)
				this.$router.replace({
					params: {
						model: tab.name
					}
				})
			},
			// 获取数据
			getMsg(tabName, page = 1) {
				this.ajaxGet(`api/${tabName}/showByUser/${id}?page=${page}`, res=> {
					console.log(res);
					this.listData = res.data.data
					this.pageData.currentPage = res.data.currentPage
					this.pageData.pageSize = res.data.pageSize
					this.pageData.total = res.data.total
				})
			},
			// 切换页数
			handleCurrentChange (val) {
				this.getMsg(this.modelFlag, val)
			}
		},
		mounted() {
			this.activeName = this.modelFlag
			this.getMsg(this.modelFlag)
		},
		watch: {
		},
		components: {
			pagination
		}
	}
</script>

<style>
	.mine-child{
		padding: 30px;
		.el-tabs__item {
			font-size: 18px;
		}
	}

</style>