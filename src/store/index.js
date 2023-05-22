import Vue from 'vue'
import Vuex from 'vuex'


const TOKEN = 'token'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem(TOKEN)),//本地持久存储token 获取
  },
  getters: { 
  },
  mutations: {
    setuser(state,token){
      state.user = token
      window.localStorage.setItem(TOKEN,JSON.stringify(token)) //存储
      // window.localStorage.removeItem('token')//删除
    },
    delectuser(state,token){

      state.user = null
      // window.localStorage.setItem(TOKEN,token) //存储
      window.localStorage.removeItem(TOKEN)//删除
    }
  },
  actions: {
  },
  modules: {
  }
})
