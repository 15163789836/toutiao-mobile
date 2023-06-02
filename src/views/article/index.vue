<template>
<div>
<van-nav-bar
  title="详情"
  left-arrow
  @click-left="$router.back()"

/>

<div class="main-box">

<h4 class="titleh4">程序员用的很多常用工具，你都用了几个？</h4>


<van-cell center>
      <van-image
    slot="icon"
  width="35"
  height="35"
  round
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>

    <div slot="title">天涯小型客</div>
    <div slot="label">14小时前</div>
  
<van-button round size="mini" type="info">关注</van-button>
    
    
     </van-cell>

     <div>
         <p>123</p>
         <p>456</p>
          <p>123</p>
         <p>456</p>
          <p>123</p>
         <p>456</p>
          <p>123</p>
         <p>456</p>
          <p>123</p>
         <p>456</p>
          <p>123</p>
         <p>456</p>
          <p>123</p>
         <p>456</p>
          <p>123</p>
         <p>456</p>

      
        


     </div>

     <div></div>

  <commenlist :list="list" @reply="replylick" />

  </div>

     <div class="but-set">
         <van-button class="button" size="mini"  type="default" @click="show = true" round>写评论</van-button>
         <van-icon name="chat-o" badge="99+" />
          <van-icon color="red" name="star" />
          <van-icon name="good-job-o" />
          <van-icon name="share-o" />
     </div>

<!-- 评论 -->
     <van-popup v-model="show" position="bottom"  >
   <postcomment @succees="succees"  />
     </van-popup>
<!-- 回复评论 -->
         <van-popup v-model="isreplyshow" position="bottom"  >
   <commenreply v-if="isreplyshow"  :replydata="replydata" @isisout="isreplyshow = false"/>
     </van-popup>


</div>
  
</template>

<script>
import { ImagePreview } from 'vant';
import { Newsdetails } from '@/api/index'
import commenlist from "./compontnts/commen-list.vue"
import postcomment from './compontnts/post-commet.vue'
import commenreply from './compontnts/commen-reply.vue'
// ImagePreview(['https://img01.yzcdn.cn/vant/apple-1.jpg']);

export default {
    name:'Login',//名称
    components:{
        commenlist,
        postcomment,
        commenreply
    },//组件
    props:{
     
    },
    data(){
      return {
          show:false,
          isreplyshow:false,
          replydata:null,

          list:[]
          

      }
    },
    
   async created(){

       let res= await Newsdetails('1260456673399537664')


       this.$$nextTick(()=>{

       })  //$nextTick 方法  将回调延迟到下次dom更新之后。用来解决数据更新 dom没有及时渲染的问题，数据更新了 想立即操作dom 但dom还没有渲染完成 用nextTick 可以拿到数据更新后 最新的dom


    },//初始化后
    mounted(){
        console.log(this.$route.query);
         console.log(this);

    },//挂载后
     methods:{
         replylick(val){
             console.log(val);
            //  alert('1')
            this.replydata = val
            this.isreplyshow = true


         },
         succees(val){
             console.log(val);
             this.list.unshift(val)
             this.show = false

         }

     },//方法
     watch:{

     },//监听
     computed:{

     }//计算属性
}
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar .van-icon{
    color: #fff;
}
.titleh4{
    margin: 0 10px;
    font-size: 20px;
    background-color: #fff;
}
.van-cell__title{
    margin-left: 10px;
}
.but-set{

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background-color: #fff;
    justify-content:space-between;
    align-items: center;
    padding: 0 20px;
   /deep/ .van-button{
        margin: 5px 0 ;
        padding: 8px 20px

    }
    
    // space-between
}
.main-box{
    position: fixed;
    top: 46px;
    left: 0;
    right: 0;
    bottom: 34px;
    overflow-y: auto;
}
</style>