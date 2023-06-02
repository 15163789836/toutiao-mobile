import request from  '../utils/request'
import store from '@/store/'

//登陆
export const login = (data) =>{
    return request({
        method:'POST',
        url:"v1_0/authorizations",
        data
    })
}
//获取短信
export const SMSverification = (data) =>{
    return request({
        method:'GET',
        url:`v1_0/sms/codes/${data}`,
        
    })
}


//获取用户信息
export const getuserinfo = (data) =>{
    return request({
        method:'GET',
        url:`v1_0/user/profile`,
       
        
    })
}

//获取首页列表
export const getUserChanels = (data) =>{
    return request({
        method:'GET',
        url:`v1_0/channels`,
        // headers:{
        //     Authorization:`Bearer ${store.state.user.token}`
        // }
        
    })
}



//获取联想建议（自动补全
export const Lenovosuggests = (q) =>{
    return request({
        method:'GET',
        url:`v1_0/suggestion`,
        params:{
            q
        }
        
    })
}


//获取搜索结果
export const Searchresults = (params) =>{
    return request({
        method:'GET',
        url:`v1_0/search`,
        params
        
    })
}


//获取新闻详情
export const Newsdetails = (id) =>{
    return request({
        method:'GET',
        url:`v1_0/articles/${id}`
        
    })
}