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
				title="修改用户名"
				show-cancel-button
				@confirm="rename"
			>
				<van-field
					v-bind:value="user.username"
					placeholder="请输入用户名"
					ref="rename"
				/>
			</van-dialog>

			<hmcell @click="passwordShow = !passwordShow">
				<div slot="left">
					密码
				</div>
				<div slot="right">
					*****
				</div>
			</hmcell>
			<van-dialog
				v-model="passwordShow"
				title="修改密码"
				show-cancel-button
				@confirm="rePassword"
				:before-close="beforeClose"
			>
				<van-field placeholder="请原来的输入密码" ref="oldPassword" />
				<van-field placeholder="请输入信的密码" ref="newPassword" />
			</van-dialog>
			<hmcell @click="genderShow = !genderShow">
				<div slot="left">
					性别
				</div>
				<div slot="right">
					{{ user.gender ? '男' : '女' }}
				</div>
			</hmcell>
			<van-dialog
				v-model="genderShow"
				title="修改性别"
				show-cancel-button
				@confirm="reGender"
			>
				<van-picker
					:columns="['女', '男']"
					@change="onChange"
					:defaultIndex="user.gender"
				/>
			</van-dialog>
		</div>
	</div>
</template>

<script>
import hmcell from '../components/hecall'
import { user_info, user_update } from '../apis/userapis'
export default {
	components: {
		hmcell
	},
	data() {
		return {
			user: {},
			dialogNickname: false,
			passwordShow: false,
			genderShow: false,
			genderIndex: ''
		}
	},
	async mounted() {
		let res = await user_info(JSON.parse(localStorage.getItem('user')).id)
		this.user = res.data.data
	},
	methods: {
		async rename() {
			let value = this.$refs.rename.$refs.input.value
			let res = await user_update(this.user.id, {
				nickname: value
			})
			this.user.nickname = res.data.data.username
		},
		async rePassword() {
			let oldPassword = this.$refs.oldPassword.$refs.input.value
			let newPassword = this.$refs.newPassword.$refs.input.value

			if (oldPassword === this.user.password) {
				if (/\d{3}/.test(newPassword)) {
					let res = await user_update(this.user.id, {
						password: newPassword
					})
					this.$toast.success(res.data.message)
				} else {
					this.$toast.fail('请输入3到6位的数字')
				}
			} else {
				this.$toast.fail('请输入正确的旧密码')
			}
		},
		beforeClose(action, done) {
			let oldPassword = this.$refs.oldPassword.$refs.input.value
			let newPassword = this.$refs.newPassword.$refs.input.value

			if (action == 'confirm') {
				if (oldPassword !== this.user.password) {
					done(false)
				} else if (!/\d{3}/.test(newPassword)) {
					done(false)
				} else {
					done()
				}
			} else {
				done()
			}
		},
		onChange(picker, values) {
			this.genderIndex = picker.columns.indexOf(values)
		},
		async reGender() {
			let res = await user_update(this.user.id, {
				gender: this.genderIndex
			})
			this.user.gender = res.data.data.gender
		}
	}
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
