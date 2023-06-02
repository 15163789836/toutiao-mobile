<template>
<div>
     <van-cell icon="search" @click="suggests(item)" :title="item"  v-for="(item,index) in datalist"  :key="index"> 
         <div slot='title' v-html="testhist(item)">   </div>
         </van-cell>     
</div>
  
</template>

<script>
import {Lenovosuggests} from '../../../api/index'

import _ from 'lodash'
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
          datalist:[]

      }
    },
    
    created(){

    },//初始化后
    mounted(){

    },//挂载后
     methods:{
           testhist(item){  //搜索的关键词高亮

             return item.replace(new RegExp(this.searchtext,'gi'),
                        `<span style="color:red">${this.searchtext}</span>`
                        )
             
             
            
         },
         suggests(value){
            //  console.log(value);
             this.$emit('Vaguesuggests',value)

         }

     },//方法
     watch:{

         searchtext:{

             handler:_.debounce(function(){ //防抖  触发函数后几秒才会执行 如果再次触法会从新计算时间
                                            //节流 函数在规定的时间内 只会触发一次
                      Lenovosuggests(this.searchtext).then(res=>{
                     console.log('res.data.options',res.data.data.options);
                   
                  this.datalist =  res.data.data.options
            
                    
                        // return item.replace(`/${this.searchtext}/gi`,
                        // `<span style="color:'red'">${this.searchtext}</span>`
                        // )

                  

                   

                    })
                 


             },1000),
             immediate:true,
             deep:true
  

            //  handler(newQuestion, oldQuestion){
            //      console.log(newQuestion,oldQuestion);

            //      Lenovosuggests(newQuestion).then(res=>{
            //          console.log('res.data.options',res.data.data.options);
            //       this.datalist = res.data.data.options

            //      })

            //  },
            //  immediate:true,
            //  deep:true

         }

     },//监听
     computed:{

       
        //  sum(){
        //     let a  =  this.searchtext 
        //     console.log(a);
        //     return a
        //  }

     }//计算属性
}
</script>

<style>

</style>