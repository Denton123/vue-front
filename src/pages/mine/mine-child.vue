<template>
	<div class="mine-child mr-top bg-fff">
		<div>
			<el-tabs v-model="activeName" @tab-click="handleClick">
		    	<el-tab-pane v-for="(model, index) in models" :label="model.label" :name="model.name" :key="index">
		    		<component
		    			:is="model.cardComponent"
		    			:listData="listData"
		    			/>
		    	</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
import message from './message.js'
	export default {
		data () {
			let obj = {}
			Object.assign(obj, message)
			return {
				activeName: '',
				models: obj,
				listData: ''
			}
		},
		props: {
			
		},
		methods: {
			handleClick (tab, event) {
				this.ajaxGet('api/' + tab.name + '/list', res=> {
					console.log(res);
					this.listData = res.data
				})
			}
		},
		mounted() {

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