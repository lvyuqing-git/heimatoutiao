<template>
  <div>
    <div class="container">
      <div class="close"><span class="iconfont iconicon-test"></span></div>
      <div class="logo"><span class="iconfont iconnew"></span></div>
      <div class="inputs">
        <hminput v-model="user.username"
                 placeholder="请输入用户名/手机号"
                 :rule='/^(\d{5,6})$|^(1\d{10})$/'
                 msg='输入不正确'></hminput>
        <hminput v-model="user.password"
                 placeholder="请输入密码"
                 :rule='/^\d{5,6}$/'
                 msg='输入不正确'></hminput>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register"
           class="">去注册</a></p>
      <hmbtn @click="login">登录</hmbtn>
    </div>
  </div>
</template>

<script>
import hmbtn from '@/components/hmbtn.vue'
import hminput from '@/components/hminput.vue'
export default {
  components: {
    hmbtn, hminput
  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log('点击');
    },
    inputfn (data) {
      this.user.username = data
    }
  }
}


</script>

<style lang='less'>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>