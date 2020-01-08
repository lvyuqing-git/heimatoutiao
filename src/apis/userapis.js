import axios from '@/utils/myaxios.js'
//用户登录

export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
//获取用户信息
export const user_info = (data) => {
    return axios({
      url: `/user/${data}`,
    })
  }

  //编辑用户信息
export const user_update = (data) => {
    console.log(data);
    
    return axios({
      url: `/user_update/${data}`,
          
    })
  }