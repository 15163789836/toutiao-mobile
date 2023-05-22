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



