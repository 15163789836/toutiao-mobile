<template>
<div class="search-result">
   <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="(item,index) in listdata" :key="index" :title="item.title" />
</van-list>

</div>
  
</template>

<script>
import { Searchresults } from '@/api/index'
export default {
    name:'Login',//名称
    components:{},//组件
    props:{
           searchtext:{
            type:String,
            required:true
        }
    },
    data(){
      return {
          listdata:[],
      list: [],
      loading: false,
      finished: false,
      page:1,
      per_page:10,
      total_count:0,//数据总数
      }
    },
    
    created(){

    },//初始化后
    mounted(){

    },//挂载后
     methods:{

          onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      //请求数据接口
      Searchresults({
          page:this.page,
          per_page:this.per_page,
          q:this.searchtext
      }).then(res=>{
          //数据赋值
   console.log(res);
  
   this.total_count = res.data.data.total_count
   this.listdata.push(...res.data.data.results)
   console.log('res.data.data.results',res.data.data.results);
    
      //   关闭本次load
         this.loading = false
      //判断 //     // 数据全部加载完成

          if(res.data.data.results.length){ 
         
           this.page++

           
          }else{
                 this.finished = true;
          }

    
    
    })

      
  
    //         if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 1000)
   
 
      
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     }

    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 1000);
    },


     },//方法
     watch:{

     },//监听
     computed:{

     }//计算属性
}
</script>
<style lang="less" scoped>

     .search-result{
         position: fixed;
         top: 54px;
         left: 0;
         right: 0;
         bottom: 0;
         overflow-y: auto;
     
 }
</style>