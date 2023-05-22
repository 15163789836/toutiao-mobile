<template>
  <div class="lgoin-box">
    <van-nav-bar
      class="van-nav-bar"
      title="登陆/注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-form @submit="onSubmit" ref="login-form">
      <van-field
        v-model="user.mobile"
        left-icon="phone-o"
        placeholder="请输入"
        :rules="rules.mobile"
        name="mobile"
      />

      <van-field
        v-model="user.code"
        left-icon="music-o"
        placeholder="请输入"
        :rules="[{ required: true, message: '请填写验证码' }]"
      >
        <template #button>
          <van-button :loading="loadingtype" size="mini" @click.prevent="onsemsms" round v-if="verifyshow"
            >发送验证码</van-button
          >

          <van-count-down  v-else  ref="countDown" :time="60000" format="ss s"   @finish="finish" />
        </template>
      </van-field>

      <div class="box-but">
        <van-button type="info" block>登陆</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, SMSverification } from "@/./api/index";
import { Toast } from "vant";

// Vue.use(Toast);

export default {
  name: "Login", //名称
  components: {}, //组件
  props: {},
  data() {
    return {
      loadingtype:false,//loading
      verifyshow:true,
      rules: {
        mobile: [
          { required: true, message: "请填写手机号" },
          {
            pattern:
              /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
            message: "请输入正确内容",
          },
        ],
      },

      user: {},
    };
  },

  created() {}, //初始化后
  mounted() {}, //挂载后
  methods: {
    finish(){
   this.verifyshow = true
    },//倒计时结束

    async onsemsms() {
      this.loadingtype = true
      try {

        const res = await this.$refs["login-form"].validate("mobile");

        const data = await SMSverification(this.user.mobile);
        console.log(" data ", data);

       
        Toast.success("发送成功");

        this.verifyshow = false



      } catch (err) {

        Toast.fail("验证失败" + err.message);
    
      }


      this.loadingtype = false
    }, //发送信息
    async onSubmit() {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      try {
        const res = await login(this.user);
        // console.log("成功",res.data.data.token);
         this.$store.commit('setuser',res.data.data)
          this.$router.back()
        Toast.success("登陆成功");
       
      } catch (err) {
        console.log("失败");
        Toast.fail("登陆失败");
      }
    },

    onClickLeft() {
      this.$router.back(); //返回之前的路径
    }, //左边点击
    onClickRight() {}, //右边点击
  }, //方法
  watch: {}, //监听
  computed: {}, //计算属性
};
</script>
<style lang="less" scoped>
.lgoin-box {
  .van-nav-bar {
    .van-nav-bar__content {
      background-color: pink !important;
    }
  }
}
.box-but {
  padding: 10px 20px;
}
</style>