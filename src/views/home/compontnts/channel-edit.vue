<template>
<div  class="channel-edit">
    
<van-cell title="单元格" value="内容"  :border='false'>
    <div slot="title">我的频道</div>

    <van-button @click="isetid = !isetid" plain round size='mini' color='red'  type="primary">{{isetid ? "完成":"修改"}}</van-button>

</van-cell>

<van-grid :gutter="10">
  <van-grid-item 
 
  @click="ounUserClick(value,index)"
  :class="{active : index  === active}"
  
  :icon="isetid && index != 0 ?'close':null"
  v-for="(value,index) in userchannels" :key="index" :text="value.name"  />
</van-grid>


    
<van-cell title="单元格"   :border='false'>
    <div slot="title">所有频道</div>

</van-cell>

<van-grid :gutter="10">
  <van-grid-item @click="addpush(value)" v-for="value  in recommenchannr" :key="value" :text="value.name"  />
</van-grid>

</div>
  
</template>

<script>
import {getAddchannrl,addUserchannel,deleteUserchannel} from '../../../api/channel'
export default {
    name:'channeledit',//名称
    components:{},//组件
    props:{
        userchannels:{
            type:Array
        },
        active:{
         type:Number
        }
    },
    data(){
      return {
        getAddlist:[],
        isetid:false

      }
    },
    
    created(){


    },//初始化后
    mounted(){
      console.log('active:',this.active);
      this.getAddchannrlcode()

    },//挂载后
     methods:{
       ounUserClick(value,index){

         if(this.isetid && index != 0){
           //删除
          if(index <= this.active){
         this.$emit('update-active',this.active - 1)
           }
            this.userchannels.splice(index,1)




              if (this.$store.state.user) {
              //又登陆

             deleteUserchannel(
                value.id
              ).then(res=>{})
              
            }else{
              //没登录

              window.localStorage.setItem('user-channels', JSON.stringify(this.userchannels))

            }


          

         }else{
         //跳转 

         this.$emit('isshow',index)
         }

       },//删除或者跳转

       addpush(vlaue){
       console.log(vlaue);

      this.userchannels.push(vlaue)

      
  if (this.$store.state.user) {
              //又登陆

              addUserchannel(
                {
                  channels:[{
                     id:vlaue.id,
                     seq:this.userchannels.length + 1
                  }
                ]
                }
              ).then(res=>{

              })
              
            }else{
              //没登录

              window.localStorage.setItem('user-channels', JSON.stringify(this.userchannels))

            }

       },
       getAddchannrlcode(){
          getAddchannrl().then(res=>{
            console.log('res',res.data.data.channels);

            this.getAddlist = res.data.data.channels

          })
       }

     },//方法
     watch:{

     },//监听
     computed:{

       recommenchannr(){

         return this.getAddlist.filter(item =>{  

           return !this.userchannels.find(it =>{ //包含不包含

             return item.id === it.id

           })

         })
       }

     }//计算属性
}
</script>

<style lang="less" scoped>
.channel-edit{
    padding-top: 50px;
   
   /deep/.van-grid-item__content{
     position: relative;
  

   }
   

}

.active{
 
  /deep/ .van-grid-item__text{
    color: red;
  }
}
  /deep/ .van-grid-item__icon{
     position: absolute;
     top: -5px;
     right: -5px;
     font-size: 14px;
   }
   /deep/ .van-grid-item__text{
     margin: 0;
   }
</style>