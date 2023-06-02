import axios from 'axios'
import store from '@/store/'
import jsonBig from 'json-bigint'



const request = axios.create({
    baseURL:'http://toutiao.itheima.net',
    transformResponse: [function (data) { //处理数据太长取证的问题
      try {
        // 如果转换成功则返回转换的数据结果
        return jsonBig.parse(data)
      } catch (err) {
        // 如果转换失败，则包装为统一数据格式并返回
        return {
          data
        }
      }
    }]
})
// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
if(store.state.user){
    config.headers.Authorization = `Bearer ${store.state.user.token}`
}

   

    return config;
  }, function (error) {

    // 对请求错误做些什么
    return Promise.reject(error);

  });

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });


//导出
export default request