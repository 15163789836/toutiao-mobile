<template>
<div class="home-container"> 
<!--  导航搜索 -->
  <van-nav-bar class="app-nav-bar">
    <van-button class="app-but" slot="title" size="small" icon="search" round type="info">搜索</van-button>
  </van-nav-bar>

  <!-- 文章频道 -->
  <van-tabs v-model="active" class="channel-tabs">
  <van-tab class="van-tab-item" v-for="item in channels" :title="item.name" :key="item.id"  >
    <!-- 文章内容 -->

<aryicle-list  :item="item"/>


  </van-tab>
 
</van-tabs>
</div>
  <!-- <van-icon name="search" /> -->
</template>

<script>
import { getUserChanels } from "@/api/index"
import AryicleList from './compontnts/aryicle-list'
export default {
    name:'Login',//名称
    components:{
      AryicleList
    },//组件
    props:{},
    data(){
      return {
        channels:[],
        active:0

      }
    },
    
    created(){
      this.loadChanneles()

    },//初始化后
    mounted(){
     
       

      

    },//挂载后

     methods:{
        loadChanneles(){
 getUserChanels().then(res=>{
          console.log(res.data.data.channels);
       this.channels = res.data.data.channels
        })
      }


     },//方法
     watch:{

     },//监听
     computed:{

     }//计算属性
}
</script>

<style lang="less" scoped>
.home-container{
   /deep/ .van-nav-bar__title{
          max-width: none;//清除最大宽度限制
        }
  .app-nav-bar{
    .app-but{
      width: 240px;
      .van-button__content{

      
        .van-icon{
            color: rgb(255, 255, 255);
        }

      }
    
    }
  }
  .channel-tabs{
    /deep/ .van-tab{

    border-right: 1px solid rgb(195, 195, 195) !important;
     border-bottom: 1px solid rgb(195, 195, 195) !important;

    
      
    }
    /deep/ .van-tabs__line{
      background-color: rgb(23, 160, 250);
      width: 20px;
      bottom: 20px;
    }

  }

}

</style>