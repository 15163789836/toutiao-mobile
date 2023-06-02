<template>
  <div class="search-container">
    <!-- 搜索栏 -->
<form action="/">
  <van-search
    v-model="searchText"
    show-action
    shape="round"
  background="#4fc08d"
    placeholder="请输入搜索关键词"
    @search="Vaguesuggests"
    @cancel="onCancel"
    @focus="focus"
  />
</form>


   <!-- 搜索结果-->
       <searchretult  v-if="isResultShow"  :searchtext="searchText"  />

     <!-- 联想建议 -->
     <searchsuggestion v-else-if="searchText" @Vaguesuggests="Vaguesuggests" :searchtext="searchText" />

     <!-- 历史记录-->
      <searchhistory v-else  :Searchhistory='Searchhistory' @Removeadd ="Removeadd"  @Vaguesuggests="Vaguesuggests" />

</div>
  
</template>

<script>
import searchsuggestion from './componynts/search-suggestion.vue'
import searchhistory from './componynts/search-history.vue'
import searchretult from './componynts/search-retult.vue'
import { Toast } from 'vant';
import { set } from 'vue';
import { Dialog } from 'vant';

export default {
    name:'Searchcontainer',//名称
    components:{
        searchsuggestion,searchhistory,searchretult
    },//组件
    props:{},
    data(){
      return {
          searchText:'',
          isResultShow:false,
          Searchhistory: JSON.parse(window.localStorage.getItem('search-history')) || [],//历史记录

      }
    },
    
    created(){

        // /数组去从  
        let a =[1,2,4,]
        let b =[1,3,4,5,6]
        console.log('ab',[...a,...b]);
       
         console.log('数组new set 去重复',  [...new Set([...a,...b])]);

    },//初始化后
    mounted(){

    },//挂载后
     methods:{
         Removeadd(index){
             console.log(index);
             if(index === 'add'){
                

                 Dialog.confirm({
  title: '提升',
  message: '是否清空全部',
})
  .then(() => {
   this.Searchhistory = []
  })
  .catch(() => {
    // on cancel
  });


             }else{
                this.Searchhistory.splice(index,1)
             }
             window.localStorage.setItem('search-history',JSON.stringify(this.Searchhistory))

        //   alert(index)
         },//删除记录

         Vaguesuggests(value){
      this.searchText = value



      let index  = this.Searchhistory.indexOf(this.searchText) //indexof 判断是数组是否包含某个值 是返回1 不是返回 -1

      if(index !== -1 ){
          //是
          this.Searchhistory.splice(index,1) //splice 删除 第一个参数删除的位置 第二个参数删除的长度

      }

       this.Searchhistory.unshift(this.searchText) ,//添加到第一项  push添加到最后一项  shift()数组中删除第一项，并返回该删除项。 pop()删除最后一项



          // 数据持久化存储 如果有登陆

          //如果没有登陆
        //   alert('1')

          window.localStorage.setItem('search-history',JSON.stringify(this.Searchhistory))




      this.isResultShow = true
         },//点击搜索

         focus(){
             this.isResultShow = false

         },//input 获得焦点

           onSearch(val) {

               this.isResultShow = true



    },
    onCancel() {
    //   Toast('取消');
    this.$router.back()
    },//取消 返回上个页面

     },//方法
     watch:{

     },//监听
     computed:{

     }//计算属性
}
</script>

<style lang="less" scoped>

</style>