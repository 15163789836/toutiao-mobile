<template>
<div class="home-container"> 
<!--  导航搜索 -->
  <van-nav-bar class="app-nav-bar">
    <van-button class="app-but" slot="title" size="small" icon="search" round type="info" to="/search">搜索</van-button>
  </van-nav-bar>

  <!-- 文章频道 -->
  <van-tabs v-model="active" class="channel-tabs">
  <van-tab class="van-tab-item" v-for="item in channels" :title="item.name" :key="item.id"  >
    <!-- 文章内容 -->

<aryicle-list  :item="item"/>
  </van-tab>
<div slot="nav-right"  class="nav-right-zw"> </div>

  <div slot="nav-right" class="tab-nav" @click="show = true">
   <van-icon name="bars" />
     </div>
</van-tabs>

<van-popup 
v-model="show"

 position="bottom"

  closeable 
  close-icon-position='top-left'
  style="height:100% "
   get-container="body" 
   >
   <channelEdit :userchannels="channels" @update-active =' active = $event'  @isshow ="isshow" :active="active" />


</van-popup>




</div>
  <!-- <van-icon name="search" /> -->
</template>

<script>
import { getUserChanels } from "@/api/index"
import AryicleList from './compontnts/aryicle-list'


import channelEdit from './compontnts/channel-edit.vue'
export default {
    name:'Login',//名称
    components:{
      AryicleList,
      channelEdit,
    },//组件
    props:{},
    data(){
      return {
        channels:[],
        active:0,
        show:false

      }
    },
    
    created(){
      this.loadChanneles()

    },//初始化后
    mounted(){
      
     
       

      

    },//挂载后

     methods:{
  isshow(index){
  this.show = false 

  this.active = index
      },

        loadChanneles(){

  if(this.$store.state.user){
    

    getUserChanels().then(res=>{
       this.channels = res.data.data.channels
        }) 





  }else{

    if(window.localStorage.getItem('user-channels')){
    this.channels =   JSON.parse(window.localStorage.getItem('user-channels'))

    }else{
      getUserChanels().then(res=>{
        console.log('res',res);

        this.channels = res.data.data.channels
      })

    }



  }







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
    .nav-right-zw{
      width: 32px;
      flex-shrink: 0;
    }
    .tab-nav{
      position: fixed;
      right: 0;
      width: 33px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      opacity: .8;

    }
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