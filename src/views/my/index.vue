<template>
<div class="my-cont">

  <van-cell-group v-if="user" class="bage-froup">

 <van-cell :border="false" class="cell" center>

   <van-image
   class="avater"
   slot="icon"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
  round
/>

<div slot="title"    class="name">{{userdata.name}}</div>

<van-button class="updete-but" plain size='small' hairline type="info" to="/user/profile" round>编辑资料</van-button>

 </van-cell>

 <van-grid  class="data-info" :border='false'> 
  <van-grid-item   class="data-info-item">
    <div slot="text"  class="text-wrap">
      <div class="text1">123</div>
      <div class="text2">头条</div>
    </div>
  </van-grid-item>
 <van-grid-item    class="data-info-item">
    <div slot="text"  class="text-wrap">
      <div class="text1">8</div>
      <div class="text2">关注</div>
    </div>
  </van-grid-item>
  <van-grid-item   class="data-info-item">
    <div slot="text"  class="text-wrap">
      <div class="text1">8</div>
      <div class="text2">粉丝</div>
    </div>
  </van-grid-item>
  <van-grid-item  class="data-info-item" >
    <div slot="text"   class="text-wrap">
      <div class="text1">8</div>
      <div class="text2">获赞</div>
    </div>
  </van-grid-item>
</van-grid>

  </van-cell-group>

  <div v-else class="no-login">

    <div @click="$router.push('/login')">
         <img  class="no-img" src="@/img/sj.png" alt="">
    </div>
        <div>登陆/注册</div>
   
  </div>

  <van-grid :column-num="2" class="nav-grid mab-4">
  <van-grid-item class="nav-grid-item" icon="star-o" text="收藏" />
  <van-grid-item class="nav-grid-item" icon="clock-o" text="历史" />
  </van-grid>

  <van-cell class="mab-4"  v-if="user" title="消息通知" is-link />

  <van-cell title="小申同学" is-link />

   <van-cell @click="ExitLogin" class="cell-box mab-4" v-if="user" title="退出登陆"   />


</div>
  
</template>

<script>
import { Dialog } from 'vant';
import {mapState} from 'vuex'
import {getuserinfo} from '@/api/index'
export default {
    name:'Login',//名称
    components:{},//组件
    props:{},
    data(){
      return {
        userdata:{}

      }
    },
    
    created(){
      this.userinfo()

    },//初始化后
    mounted(){

    },//挂载后
     methods:{

      async userinfo(){
        let {data} = await getuserinfo()
         this.userdata = data

        console.log(data);

       },//用户详情

       ExitLogin(){

         Dialog.confirm({
  title: '提升',
  message: '是否删除',
})
  .then(() => {
 this.$store.commit('delectuser')
  })
  .catch(() => {
    // on cancel
  });
  
        
       },//退出登陆

     },//方法
     watch:{

     },//监听
     computed:{
       ...mapState(['user'])

     }//计算属性
}
</script>

<style lang="less" scoped>
.my-cont{
  

  .bage-froup{
    padding: 35px  0 10px 0;
  background-color: rgb(43, 172, 241) !important;

  .avater{
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
  }
  .name{
    color: #fff;
    font-size: 16px;
    margin-left: 10px;
  }
  .cell{
    background-color: unset;
  }
  /deep/ .van-grid-item__content{
    background-color: unset !important;
  }

  .cell-text{
    display: flex;
    // justify-content: space-around;
    //  justify-content: space-evenly
  }
  .data-info{
    .data-info-item{
      height: 65px;
      color:#fff;

     .text-wrap {
       display: flex;
       flex-direction: column;//多个垂直居中
       justify-content: center;
       align-items: center;
       .text1{
         font-size: 16px;

       }
       .text2{
          font-size: 14px

       }

     }

    }
  }
  
}

.nav-grid{
 /deep/ .nav-grid-item{
    height: 70px;

    .van-grid-item__content{
      // background-color:  pink !important;
      .van-grid-item__icon{
        font-size: 20px;
        color: rgb(239, 77, 8); // background-color: pink !important;
      }
      .van-grid-item__text{
  font-size: 14px;
      }

    }

    
   
  }
}



.cell-box{
  text-align: center;
  color: rgb(239, 77, 8); 
}
.mab-4{
  margin-top: 5px;
}

.no-login{
  height: 260px;
   background-color: rgb(43, 172, 241) !important;
   display: flex;
       flex-direction: column;//多个垂直居中
       justify-content: center;
       align-items: center;
 
   .no-img{
     width: 66px;
     height: 66px;
   }
}
}


</style>