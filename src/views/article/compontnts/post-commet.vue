<template>
  
<div class="post-box">
  <!-- .trim 去除空格 -->
  <van-field
  class="imput-text"
  v-model.trim="message" 
  rows="2"
  type="textarea"
  maxlength="50"
  placeholder="请输入留言"
  show-word-limit
/>
<van-button class="but"  type="default" @click="fabu">发布</van-button>
</div>
</template>

<script>
export default {
  data(){
    return {
      message
    }
  },
  methods:{
    fabu(){
      this.$emit('succees',this.message)

    }
  }

}
</script>

<style lang="less" scoped>
.post-box{
  display: flex;
  align-items: center;

  .imput-text{
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;

  }
  .but{
    width: 100px;
    border: 0;

  }

}
</style>