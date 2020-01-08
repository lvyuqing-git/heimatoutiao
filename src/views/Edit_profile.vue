<template>
	<div id="app">
		<div class="editprofile">
			<div data-v-3a9f86c9="" class="header">
				<span data-v-3a9f86c9="" class="iconfont iconjiantou2"></span>
				<h4 data-v-3a9f86c9="">编辑用户资料</h4>
				<span data-v-3a9f86c9=""></span>
			</div>
			<div class="head">
				<img
					alt=""
					src="http://localhost:3000/uploads/image/IMG1570927791226.jpeg"
				/>
				<div class="uploader van-uploader">
					<div class="van-uploader__wrapper">
						<div class="van-uploader__upload">
							<i
								class="van-icon van-icon-plus van-uploader__upload-icon"
								><!----></i
							><input
								type="file"
								accept="image/*"
								class="van-uploader__input"
							/>
						</div>
					</div>
				</div>
			</div>
			<div data-v-5619741e="" class="mycell">
				<span data-v-5619741e="">昵称</span
				><span data-v-5619741e="">itcast123</span
				><span data-v-5619741e="" class="iconfont iconjiantou1"></span>
			</div>
			<!---->
			<div data-v-5619741e="" class="mycell">
				<span data-v-5619741e="">密码</span
				><span data-v-5619741e="">******</span
				><span data-v-5619741e="" class="iconfont iconjiantou1"></span>
			</div>
			<!---->
			<div data-v-5619741e="" class="mycell">
				<span data-v-5619741e="">性别</span
				><span data-v-5619741e="">女</span
				><span data-v-5619741e="" class="iconfont iconjiantou1"></span>
			</div>
			<!---->
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;

  .uploader {
    position: absolute;
    opacity: 0;
  }

  img {
    display: block;
    width: 100 / 360 * 100vw;
    height: 100 / 360 * 100vw;
    border-radius: 50%;
  }
  /deep/.van-uploader__upload {
    width: 100 / 360 * 100vw;
    height: 100 / 360 * 100vw;
  }
  /deep/.van-picker-column__item{
      border-top:1px red sloid;
      border-bottom:1px red sloid;
  }
}
</style>
