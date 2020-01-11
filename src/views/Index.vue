<template>
	<div class="index">
		<!-- 头部 -->
		<div class="header">
			<div class="logo">
				<span class="iconfont iconnew"></span>
			</div>
			<div class="search" @click="$router.push({ name: 'Search' })">
				<van-icon name="search" />
				<span>搜索商品</span>
			</div>
			<div
				class="user"
				@click="$router.push({ path: `/personal/${id}` })"
			>
				<van-icon name="manager-o" />
			</div>
		</div>
		<div class="nav">
			<van-tabs sticky swipeable @change="changeColumn">
				<van-tab
					:title="item.name"
					v-for="item in columnList"
					:key="item.id"
				>
                <hminformation v-for="value in item.presentList" :key="value.id" :post='value'></hminformation>

                </van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
import { category, getAllArticle } from '../apis/article'
import hminformation from '../components/hminformation'
export default {
	data() {
		return {
			columnList: []
		}
    },
    components: {
      hminformation  
    },
	async mounted() {
		let res = await category()
		this.columnList = res.data.data.map(value => {
			return {
				...value,
				pageIndex: 1,
				pageSize: 5,
				presentList: []
			}
		})
		console.log(this.columnList)
	},
	methods: {
		async changeColumn(active) {
			let res = await getAllArticle({
				pageIndex: this.columnList[active].pageIndex,
				pageSize: this.columnList[active].pageSize,
				category: this.columnList[active].id
			})
			this.columnList[active].presentList = res.data.data
			console.log(this.columnList[active].presentList)
		}
	}
}
</script>

<style lang="less" scoped>
.header {
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	background-color: #f00;
	align-items: center;
	color: #fff;
	.logo {
		padding: 0 10px;

		.iconnew {
			font-size: 60px;
			color: #fff;
		}
	}
	.search {
		height: 40px;
		border-radius: 20px;
		flex: 1;
		background-color: rgba(255, 255, 255, 0.4);
		text-align: center;
		line-height: 40px;
	}
	.user {
		font-size: 25px;
		padding: 0 10px;
	}
}
/deep/.van-sticky {
	padding-right: 50px;
	&::after {
		content: '+';
		position: absolute;
		width: 51px;
		height: 44px;
		background-color: #fff;
		top: 0;
		right: 0;
		text-align: center;
		line-height: 42px;
		font-size: 35px;
	}
}
</style>
