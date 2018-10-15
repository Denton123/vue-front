<template>
	<div class="product_detail">
		<div class="product_detail_header">
			<h1>{{music.title}}</h1>
			<img :src="`/uploadImgs/${music.pic}`" alt="">
		</div>
		<div class="product_detail_list">
			<h1>产品目录</h1>
			<el-row :gutter="10">
        		<el-col :span="6" v-for="i in listData" :key="i.id" >
        			<div @click="toDetail(i.id)" class="product_detail_list_wrap">
        				<img :src="`/uploadImgs/${i.pic}`" class="product_detail_col_img">
        			</div>
        				<h2 class="product_detail_col_title">{{i.title}}</h2>
        				<p>{{i.desc}}</p>
        		</el-col>
        	</el-row>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				music: {},
				listData: {}
			}
		},
		methods: {
			getMusic() {
				let id = this.$route.params.id
				this.ajaxGet(`${music.showById}/${id}`, res => {
					console.log(res)
					this.music = res.data
				})
			},
			getMusicProduct() {
				let id = this.$route.params.id
				this.ajaxGet(`${instrument.showByMusicId}/${id}`, res => {
					console.log(res)
					this.listData = res.data
				})
			},
			toDetail (pid) {
				let id = this.$route.params.id
				this.$router.push(`/music/product/${id}/${pid}`)
			}
		},
		mounted () {
			this.getMusic()
			this.getMusicProduct()
		}
	}
</script>

<style lang="scss" scoped>
	.product_detail{
		&_header{
			width: 100%;
			height: 480px;
			margin-bottom: 20px;
			h1{
				padding: 5px;
				text-align: left;
			}
			img{
				width: 100%;
				height: 90%;
			}
		}
		&_col {
			&_img{
				width: 100%;
					height: 100%;
			}

		}
		p{
			text-align: left;
		}
		&_list{
			margin-top: 20px;
			h1{
				text-align: left;
				padding: 5px;
			}
			&_wrap{
				width: 100%;
				height: 195px;
			}
		}
	}
</style>