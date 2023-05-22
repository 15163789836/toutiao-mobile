<template>
<van-cell class="article-item">
    <div class="title" slot="title">{{item.title}} </div>


     <div slot="label">

         <div class="cover-wrap"  v-if="item.cover.type =='3'">
                    <van-image
                
                   v-for="(it,index) in item.cover.imgges"
                :key="index"
                class="img-wh cover-wrap-item"
        
  



  :src="it"
/>
         </div>

         <div class="label-warp">
           <span>{{item.aut_name}}</span>
              <span>{{item.comm_count}}评论</span>
                 <span>{{item.pubdate | relativeTime}}</span>
         </div>

     </div>


         <!-- <div  slot="default" v-if="item.cover.type === '1' ">123</div> -->
         <van-image
         v-if="item.cover.type =='1' "
   class="img-wh"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
  
  
    
    
     </van-cell>
  
</template>

<script>
export default {
    name:'articleitem',//名称
    components:{},//组件
    props:{
         item:{
            type:Object,
            required:true
        }
    },
    data(){
      return {

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

<style lang="less" scoped>
.article-item{

    .title{
        font-size: 16px;
    }
    .cover-wrap{
        display: flex;
        padding: 15px 0;
        .cover-wrap-item{
            flex: 1;
            // padding: 6px;
            // &:mot(:last-child(2)){
            //     padding-right: 20px;
            // }
            // :last-child(1)

        }
    }
    .label-warp{
        font-size: 12px;
        color: rgb(200, 200, 200);
        span{
            margin: 0 6px;
        }
    }

    /deep/ .van-cell__value{
        display: unset;
        width: 116px;
        height: 73px;
    }
    .img-wh {
        width: 116px;
        height: 73px;
    }
}
</style>