<template>
   <div>

<!-- 操作历史纪录 -->
<van-cell  >
    <div slot="title" >历史记录</div>

    <div v-if="isshow">
        <span @click="Deleteall('0','add')">全部删除</span>
        &nbsp; &nbsp;
        <span @click="finish">完成</span>
    </div>

    <div v-else>
      <van-icon name="delete-o"  @click="deletejilu"/>
    </div>

</van-cell>
<!-- 历史记录 -->
<van-cell :title="item" v-for="(item,index) in Searchhistory"  @click="Deleteall(item,index)"  :key="index" > 
    <div>
        <van-icon name="close"  v-if="isshow" />
    </div>
</van-cell>



   </div>
  
</template>

<script>
export default {
    name:'Login',//名称
    components:{},//组件
    props:{
        Searchhistory:{
            type:Array,
             required:true
        }
    },
    data(){
      return {
          isshow:false

      }
    },
    
    created(){

    },//初始化后
    mounted(){

    },//挂载后
     methods:{
         deletejilu(){
            this.isshow = true
         },//删除icon
         finish(){
             this.isshow = false
         },//完成
         Deleteall(value,index){

          
             if( this.isshow){
                    this.$emit('Removeadd',index)
             }else{
                  this.$emit('Vaguesuggests',value)
             }
        // this.Searchhistory.slice(index,1)
        // alert('1')
         },//全部删除

     },//方法
     watch:{

     },//监听
     computed:{

     }//计算属性
}
</script>

<style>

</style>