<template>
	<div class="personal">
		<router-link to="/edit_profile">
			<div class="profile">
				<!-- $axios.defaults.baseURL读取axios的服务器路径 -->
				<img
					src="http://127.0.0.1:3000/uploads/image/default.jpeg"
					alt=""
				/>
				<div class="profile-center">
					<div class="name">
						<span class="iconfont iconxingbienan"></span>我就是我
					</div>
					<div class="time">2019-9-24</div>
				</div>
				<span class="iconfont iconjiantou1"></span>
			</div>
		</router-link>
        <hecell>
            <div slot="left">
                我的关注
            </div>
           <div slot="right">
                关注的用户
            </div>
        </hecell>
         <hecell>
            <div slot="left">
                我的关注
            </div>
           <div slot="right">
                关注的用户
            </div>
        </hecell> <hecell>
            <div slot="left">
                我的关注
            </div>
           <div slot="right">
                关注的用户
            </div>
        </hecell> <hecell>
            <div slot="left">
                我的关注
            </div>
        </hecell>
	</div>
</template>

<script>
import hecell from '@/components/hecall'
export default {
    components: {
        hecell
    }
}
</script>

<style lang='less' scoped>
.personal{
    width: 100vw;
    height: 100vh;
    background-color: #eee;
}
a{
    color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>

