<template>
  <div class="user-box">

      <van-nav-bar
  title="个人信息"
  left-arrow
  @click-left="$router.back()"
  
/>
 <input ref="fileinput" id="file" type="file" accept="image/*"  hidden @change="fileChang" />
  <van-cell title="头像" value="内容" is-link center @click="cellimg" >

      <div>
          <van-image
  width="35"
  height="35"
  round
  fit="cover"
  :src="user.img"
/>
      </div>
  </van-cell>
    <van-cell title="昵称" is-link :value="user.name" @click="show = true" />

      <van-cell title="性别" is-link :value="user.sex" @click="sexshow = true" />

        <van-cell title="生日" is-link  :value="user.timi"  @click="timishow = true"/>

<!-- 修改名称 -->
<van-popup v-model="show" position="bottom" v-if="show" class="popup-back" :style="{ height: '100%' }" >
     <!-- <updatename @showout="show = false"  :name="user.name" @updataname="user.name = $event"/> -->
     <!-- 组建使用v-model  也可以是使用  变量名.sync   修改是 updata:变量名-->
          <updatename @showout="show = false" v-model="user.name" /> 
</van-popup>

<!-- 修改性别 -->
<van-popup  v-model="sexshow" position="bottom"  class="popup-back" :style="{ height: '30%' }" >

          <updatesex  v-model="user.sex"  @cancel="sexshow = false"/> 
</van-popup>
<!-- 修改生日 -->

<van-popup  v-model="timishow" position="bottom"  class="popup-back" :style="{ height: '30%' }" >

          <updatetime  v-model="user.timi"  @cancel="timishow = false"/> 
</van-popup>
<!-- 修改头像 -->

<van-popup  v-model="fileshow" position="bottom"  class="popup-back" :style="{ height: '100%' }" >

          <updateimg :file="file" @updata-img="user.img = $event"  @cancel="fileshow  = false"/> 
</van-popup>



  </div>
</template>
   

<script>
import updatename from './compontnts/update-name.vue'
import updatesex from './compontnts/updata-sex.vue'
import updatetime from './compontnts/updata-time.vue'
import updateimg from './compontnts/updata-img.vue'
export default {
    components:{
        updatename,updatesex,updatetime,updateimg
    },
    data(){
        return {
            show:false,
            user:{
                name:"我是名字",
                img:'https://img01.yzcdn.cn/vant/cat.jpeg',
                sex:'男',
                timi:'2022-09-19',
            },
            sexshow:false,
            timishow:false,
            fileshow:false,
            file:'',

        }
    },
    methods:{
      fileChang(file){
        // 展示弹窗
        this.fileshow = true
        console.log(this.$refs.fileinput.files);
        const blob =this.$refs.fileinput.files[0] //能获取到上传文件的图片地址
        // const blob = window.URL.createObjectURL(this.$refs.fileinput.files[0]) //能获取到上传文件的图片地址
        console.log(blob);
        this.file = blob


      // file

  

  this.$refs.fileinput.value = ''

      },

      cellimg(){
      //  let input  = this.$refs.fileinput  //VUE  
       let input  = document.getElementById('file')//JS
       input.click()


       console.log('input ',input);
      },
        onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },

    }

}
</script>
<style lang="less" scoped>
.popup-back{
    background-color: rgb(238, 238, 238);
}
</style>