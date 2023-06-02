<template>
<!-- 评论 -->
 <van-cell  class="item-conter">
     <van-image
     slot="icon"
     class="icon-img"

  height="35"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
  round
/>
 <div class="title" slot="title" >

   <div class="name-icon">
    <div class="name">张大炮</div>
    {{item}}
    <div @click="goodgood">
        <!-- <van-icon name="good-job" /> -->
   <van-icon 
   :color="!good ? '#ccc' :'red'"
   :name="!good ? 'good-job-o' :'good-job' "
    />
   <span>{{sum}}</span>
 </div>
 </div>

    <div class="conter">娃的哈我啊我不打我都把我的把握</div>

    <div class="data-but">
     <span class="data">2023-5-29 19:20:21</span>
     <van-button class="but-onn" type="default" round  size="mini" @click="$emit('reply',item)">  回复</van-button>
    </div>

</div>



     
 </van-cell>
</template>

<script>
export default {
    props:{
       item:{
           
       }
    },
    data(){
        return{
            sum:18,
            good:true
        }
    },
    methods:{
        goodgood(){
       
            this.good = !this.good
            if(this.good){

             this.sum++

            }else{

         this.sum--
            }

        }
    }

}
</script>

<style lang="less" scoped>
.item-conter{
    .icon-img{
        width: 35px;
        height: 35px;
        margin-right: 5px;
    }
    .name{
        font-size: 14px;
        color: rgb(4, 120, 244); 
    }
    .conter{
        font-size: 14px;
        color: rgb(21, 21, 21); 

    }
    .name-icon{
        display: flex;
        justify-content: space-between;
        
    }
    .but-onn{
        margin-left: 10px;
    }
    .data-but{
        display: flex;
    //   justify-content: center;
      align-items: center;
    }

}
</style>