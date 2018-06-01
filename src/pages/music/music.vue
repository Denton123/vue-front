 * music模块组件
 * @author 舒丹彤 
 * @date 2018/05/24
 * 
 */
<template>
    <div class="music">
        <slide :infoData="infoData" :slideParams="slideParams"/>
        <div class="music-product">
        	<h2 class="music-product-title">
        		产品
        	</h2>
        	<el-row :gutter="10">
        		<el-col :span="6" v-for="i in listData" :key="i.id" >
        			<div @click="toDetail(i.id)" class="music-product-wrap">
        				<img :src="`/uploadImgs/${i.pic}`" class="music-product-img">
        				<span>{{i.title}}</span>
        			</div>
        		</el-col>
        	</el-row>
        </div>
    </div>
</template>

<script>
import slide from '../one/components/slideShow'
	export default {
		data () {
			return {
				slideParams: {
					height: '400px'
				},
				infoData: [],
				listData: []
			}
		},
		methods: {
			getProductMsg () {
				let id = localStorage.getItem('user')
				this.ajaxGet(`${music.showByUser}/${id}`, res => {
					console.log(res)
					this.listData = res.data
				})
			},
			getSlideMsg () {
				for (let i = 0;i < 3; i++) {
					this.infoData.push({
						img: `../../../static/image/musicLi/l${i}.jpg`,
						id: i
					})
				} 
			},
			toDetail (id) {
				console.log(id);
				this.$router.push(`/music/product/${id}`)
			}
		},
		mounted () {
			this.getProductMsg()
			this.getSlideMsg()
		},
		components: {
			slide
		}
	}
</script>

<style lang="scss" scoped>
	.music{
		&-product{
			margin-top: 20px;
			&-title{
				text-align: left;
				border-bottom: 1px solid #bdbaba;
				margin-bottom: 20px;
			}
			&-img{
				width: 100%;
				height: 100%;
				transition: all .6s;
				&:hover{
					transform: scale(1.2);
				}
			}
		}
		.el-col-6{
			position: relative;
			span{
				display: inline-block;
				position: absolute;
				bottom: 20px;
				left: 37%;
				color: #fff;
				font-size: 16px;
			}
		}
	}
</style>