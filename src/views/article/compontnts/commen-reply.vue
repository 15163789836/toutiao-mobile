<template>
  <div>
<!-- 导航 -->
      <van-nav-bar
  title="评论项"
  @click-left="onClickLeft"
 
>

<van-icon slot="left" name="cross" />
</van-nav-bar>
<!-- 当前评论 -->

 <item  :item='replydata'  />

<!-- 回复列表 -->
<van-cell title="当前回复" />

<commenlist  :list="list" />

<!-- 底部回复按钮 -->

   <div class="but-set">
         <van-button class="button" size="mini"  type="default" @click="isisshow = true" round>发布回复</van-button>
         
     </div>
     <!-- 回复评论 -->

     <van-popup v-model="isisshow" position="bottom"  >
      
   <postcomment @succees="succees" />
     </van-popup>
      
  </div>
</template>

<script>
import item from './commen-item.vue'
import commenlist from "./commen-list.vue"
import postcomment from './post-commet.vue'
export default {

    props:{
replydata:{

},

    },
    components:{
        item,commenlist,postcomment
    },

    data(){
        return {
        isisshow:false,
        list:[]
        }
    },
    
    methods:{
        onClickLeft(){
            this.$emit('isisout')
        },
          succees(val){
             console.log(val);
             this.list.unshift(val)
             this.isisshow = false

         }
    }

}
</script>

<style lang="less" scoped>
.but-set{

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background-color: #fff;
    justify-content: center;
    // justify-content:space-between;
    align-items: center;
    padding: 10px 20px;
   /deep/ .van-button{
       width: 60%;
        margin: 5px 0 ;
        padding: 8px 20px

    }
    
    // space-between
}
</style>