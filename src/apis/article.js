import axios from '../utils/myaxios'
//获取栏目数据
export const category = ()=>{
    return axios({
        url : '/category'
    })
}
//获取文章列表
export const getAllArticle = (params)=>{
    return axios({
        url : '/post',
        params
    })
}