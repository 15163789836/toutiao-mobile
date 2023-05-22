<template>
<div>

  <!-- 子路由出口 -->
   <router-view/>




<van-tabbar v-model="active" route>
  <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
  <van-tabbar-item icon="search"  to="/qa">问答</van-tabbar-item>
  <van-tabbar-item  icon="play-circle-o" to="/video">视频</van-tabbar-item>
  <van-tabbar-item  icon="friends-o"  to="/my">我的</van-tabbar-item>
</van-tabbar>
 
</div>
  
</template>

<script>
export default {
    name:'Login',//名称
    components:{},//组件
    props:{},
    data(){
      return {
       active: 0,
      }
    },
    
    created(){

    },//初始化后
    mounted(){

    },//挂载后
     methods:{

     },//方法
     watch:{

     },//监听
     computed:{

     }//计算属性
}
</script>

<style>

</style>