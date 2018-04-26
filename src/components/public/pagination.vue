/**
 * 
 * 分页组件
 * @author 舒丹彤 
 * @date 2018/04/26
 * 
 */

<template>
	<div>
		<el-pagination
			@current-change="handleCurrentChange"
	    	:current-page="pageData.currentPage"
	    	:page-size="pageData.pageSize"
	    	layout="total, prev, pager, next, jumper"
	    	:total="pageData.total">
    	</el-pagination>
	</div>
</template>

<script>
	export default {
		props: {
			pageData: {}
		},
		methods: {
			// 当前页数改变时
			handleCurrentChange (val) {
				this.$emit('handleCurrentChange', val)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.el-pagination{
		padding: 27px 5px;
	}
</style>