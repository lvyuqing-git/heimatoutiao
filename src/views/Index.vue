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
			<div class="user" @click="$router.push({ path: `/personal` })">
				<van-icon name="manager-o" />
			</div>
		</div>
		<div class="nav">
			<van-tabs sticky swipeable v-model="active">
				<van-tab
					:title="item.name"
					v-for="item in columnList"
					:key="item.id"
				>
					<van-pull-refresh
						v-model="item.isLoading"
						@refresh="onRefresh"
					>
						<van-list
							v-model="item.loading"
							:finished="item.finished"
							finished-text="没有更多了"
							@load="onLoad"
							:immediate-check="false"
						>
							<hminformation
								v-for="value in item.presentList"
								:key="value.id"
								:post="value"
								@click="
									$router.push({
										path: `/articleDetails/${value.id}`
									})
								"
							></hminformation>
						</van-list>
					</van-pull-refresh>
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
			columnList: [],
			active: localStorage.getItem('user_token') ? 1 : 0
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
				presentList: [],
				//上拉加载
				loading: false,
				finished: false,
				//下拉刷新
				isLoading: false
			}
		})
        this.init()
        console.log(this.columnList[this.active].presentList);
        
	},
	methods: {
		async init() {
			let res = await getAllArticle({
				pageIndex: this.columnList[this.active].pageIndex,
				pageSize: this.columnList[this.active].pageSize,
				category: this.columnList[this.active].id
			})
			for (let i = 0; i < res.data.data.length; i++) {
				for (let j = 0; j < res.data.data[i].cover.length; j++) {
					if (res.data.data[i].cover[j].url.indexOf('http') == -1) {
						res.data.data[i].cover[j].url =
							'http://127.0.0.1:3000' +
							res.data.data[i].cover[j].url
					}
				}
			}
			this.columnList[this.active].presentList.push(...res.data.data)
			if (res.data.total < this.columnList[this.active].pageIndex) {
				this.columnList[this.active].finished = true
			}
		},
		
		//上拉加载
		onLoad() {
			this.columnList[this.active].pageIndex++
			this.init()
			this.columnList[this.active].loading = false
		},
		//下拉刷新
		onRefresh() {
			console.log('下拉刷新')
			this.columnList[this.active].presentList.length = 0
			this.columnList[this.active].pageIndex = 1
			this.init()
			this.columnList[this.active].isLoading = false
        },
        
    },
    watch: {
			active(){
                this.init()
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
