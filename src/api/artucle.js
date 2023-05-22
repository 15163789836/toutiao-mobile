import request from  '../utils/request'

//获取信息列表
export const getArticles= (params) =>{
    return request({
        method:'GET',
        url:`/app/v1_1/articles`,
        params
        
        
    })
}

