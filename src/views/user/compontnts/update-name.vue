<template>
  <div>
      <van-nav-bar
  title="修改"
  left-text="返回"
  right-text="完成"
  left-arrow
  @click-left="$emit('showout')"
  @click-right="onClickRight"
/>

<div class="imdex-box">
    <van-field
  v-model="message"
  rows="3"
  autosize
  class="file-size"
  
  type="textarea"
  maxlength="50"
  placeholder="请输入留言"
  show-word-limit
/>

</div>



  </div>
</template>

<script>
export default {
    props:{
        // 子组建 value
        value:{

        }
    },
    data(){
        return {
            message:this.value,

        }
    },
    methods:{
    
    onClickRight() {
   
    // 请求更新借口
     
    //修改父数据name
    this.$emit('input',this.message)

    //关闭弹窗
    this.$emit('showout')
    },

    }

}
</script>

<style lang="less" scoped>
.imdex-box{
    padding: 20px;
    border-radius: 20%;
    overflow: hidden;
}
</style>