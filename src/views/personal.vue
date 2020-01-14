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
						<span class="iconfont iconxingbienan"></span>{{user.nickname}}
					</div>
					<div class="time">{{user.create_date}}</div>
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
                我的跟帖
            </div>
           <div slot="right">
                跟帖/回复
            </div>
        </hecell> <hecell>
            <div slot="left">
                我的收藏
            </div>
           <div slot="right">
                文章/视频
            </div>
        </hecell> <hecell>
            <div slot="left">
                设置
            </div>
        </hecell>
	</div>
</template>

<script>
import hecell from '@/components/hecall'
import {user_info} from '@/apis/userapis'
export default {
    data () {
        return {
            user : {}
        }
    },
    components: {
        hecell
    },
    async mounted () {
        let res = await user_info(JSON.parse(localStorage.getItem('user')).id)
        console.log(res);
        
        this.user = res.data.data
        
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

