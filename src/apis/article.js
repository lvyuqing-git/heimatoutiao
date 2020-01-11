import axios from '../utils/myaxios'

export const category = ()=>{
    return axios({
        url : '/category'
    })
}