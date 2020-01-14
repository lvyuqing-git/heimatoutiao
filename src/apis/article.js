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

//获取文章详情
export const getDetailInfo = (id)=>{
    return axios({
        url : `/post/${id}`
    })
}