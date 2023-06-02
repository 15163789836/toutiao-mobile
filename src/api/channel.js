import request from  '../utils/request'

//获取 所有频道列表
export const getAddchannrl = () =>{
    return request({
        method:'GET',
        url:`/v1_0/channels`,
  
    
    })
}

//设置用户的频道（部分覆盖
export const addUserchannel = (data) =>{
    return request({
        method:'PATCH',
        url:`/v1_0/user/channels`,
        data
  
    
    })
}
// 删除指定用户频道
export const deleteUserchannel = (index) =>{
    return request({
        method:'DELETE',
        url:`/v1_0/user/channels/${index}`,

  
    
    })
}





