<template>

<!-- 固定定位 上下间距 -->
<div class="artichle-list">

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <!-- <van-cell v-for="item in list" :key="item.aut_id"  > -->
      
      <articleitem  v-for="(item,index) in list" :key="index"  :item="item" />

  <!-- </van-cell> -->
  


</van-list>
</van-pull-refresh>



</div>
  
</template>

<script>
import {getArticles} from '@/api/artucle'
import articleitem from "@/components/article-item"
export default {
    name:'AryicleList',//名称
    components:{
        articleitem
    },//组件
    props:{
        item:{
            type:Object,
            required:true
        }
    },
   
    data(){
      return {
      list: [],
       isLoading: false,
      loading: false,
      finished: false,
      datamoke:[{
    art_id:12312312312312,
    aut_id:1,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{
        imgges:['https://great.wzznft.com/i/2023/05/21/siljxl.png','https://great.wzznft.com/i/2023/05/21/siljxl.png','https://great.wzznft.com/i/2023/05/21/siljxl.png'],
        type:3
    },
    like_count:0,
    pubdate:'2023-05-21 19:18:09',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:2,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-21 19:18:09',
    title:"漂洋过来看你"
      },
       {
    art_id:12312312312312,
    aut_id:3,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
       {
    art_id:12312312312312,
    aut_id:4,
    aut_name:"65 哭了11",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
     cover:{
        imgges:['https://great.wzznft.com/i/2023/05/21/siljxl.png'],
        type:1
    },
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
       {
    art_id:12312312312312,
    aut_id:5,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
       {
    art_id:12312312312312,
    aut_id:6,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
       {
    art_id:12312312312312,
    aut_id:7,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:8,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:9,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:10,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:11,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:12,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:13,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:14,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      ],
       datamoketow:[{
    art_id:12312312312312,
    aut_id:1,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:2,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
       {
    art_id:12312312312312,
    aut_id:3,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
       {
    art_id:12312312312312,
    aut_id:4,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
       {
    art_id:12312312312312,
    aut_id:5,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
       {
    art_id:12312312312312,
    aut_id:6,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
       {
    art_id:12312312312312,
    aut_id:7,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:8,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:9,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:10,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:11,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
      {
    art_id:12312312312312,
    aut_id:12,
    aut_name:"65 哭了",
    ch_id:10,
    collect_count:0,
    comm_conut : 0,
    cover:{},
    like_count:0,
    pubdate:'2023-05-22T9T19:59:31',
    title:"漂洋过来看你"
      },
 
      ]
      }
    },
    // 
    
    // 
    created(){

    },//初始化后
    mounted(){
        // console.log('props',this.item.id);

    },//挂载后
     methods:{
         async onLoad() {
             console.log(111);
// console.log('Date.mow()',Date.mow());
            //  let res = await getArticles(
            //      {
            //          channe_id:this.item.id,
            //          timestamp:Date.now(),
            //          with_top:0,
            //      },
                 
            //  )

  this.list.push(...this.datamoke);

  this.loading = false;

  


   if(this.list.length >= 40){
    //    alert('1')
 this.finished = true;
   }


      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
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
          }, //初始化数据

          onRefresh(){
              setTimeout(()=>{
                  this.list = this.datamoketow
  this.isLoading=false
   this.finished = false;
              },2000)//定时器

            //   setInterval//循环定时器

              
 
          }//下啦刷新

     },//方法
     watch:{

     },//监听
     computed:{

     }//计算属性
}
</script>


<style lang="less" scoped>
.artichle-list{
    position: fixed;
    left: 0;
    right: 0;
    top: 90px;
    bottom: 50px;

    overflow-y: auto;
}
</style>