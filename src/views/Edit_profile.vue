<template>
	<div id="app">
		<div class="editprofile">
			<div class="header">
				<span
					class="iconfont iconjiantou2"
					@click="$router.back()"
				></span>
				<h4>编辑用户资料</h4>
				<span></span>
			</div>
			<div class="head">
				<img
					alt=""
					src="http://127.0.0.1:3000/uploads/image/default.jpeg"
				/>
			</div>

			<hmcell @click="dialogNickname = !dialogNickname">
				<div slot="left">
					昵称
				</div>
				<div slot="right">
					{{ user.nickname }}
				</div>
			</hmcell>
			<van-dialog
				v-model="dialogNickname"
				title="标题"
				show-cancel-button
			>
				<van-cell-group>
					<van-field v-model="value" placeholder="请输入用户名" />
				</van-cell-group>
			</van-dialog>
			<hmcell>
				<div slot="left">
					密码
				</div>
				<div slot="right">
					*****
				</div>
			</hmcell>
			<hmcell>
				<div slot="left">
					性别
				</div>
				<div slot="right">
					{{ user.gender }}
				</div>
			</hmcell>
		</div>
	</div>
</template>

<script>
import hmcell from '../components/hecall'
import { user_info } from '../apis/userapis'
export default {
	components: {
		hmcell
	},
	data() {
		return {
			user: {},
			dialogNickname: false
		}
	},
	async mounted() {
		let res = await user_info(JSON.parse(localStorage.getItem('user')).id)
		console.log(res)
		this.user = res.data.data
	},
	methods: {}
}
</script>

<style lang="less" scoped>
.editprofile {
	margin: 15px 15px;
	.header {
		display: flex;
		justify-content: space-between;
		height: 30px;
		line-height: 30px;
		h4 {
			font-weight: bold;
			color: #000;
		}
	}
	.head {
		position: relative;
		height: 100px;
		margin: 20px 0;
		img {
			position: absolute;
			border-radius: 50%;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}
}
</style>
