<template>
	<div>
		<div class="mine-head">
			<img src="../../static/image/mine-bg.jpg" class="mine-head-bg">
			<div class="mine-head-avatar">
				<Avatar icon="person" size="large" />
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss">
	.mine{
		&-head{
			width: 100%;
			position: relative;
			&-bg{
				width: inherit;
				height: 250px;
			}
			&-avatar{
				position: absolute;
				left: 28px;
				top: 152px;
				padding: 5px;
				background: #fff;
				border-radius: 13px;
				.ivu-avatar-large{
					width: 131px;
					height: 131px;
					border-radius: 8px;
					line-height: 131px;
					font-size: 80px;
				}
			}
			
		}
	}
</style>