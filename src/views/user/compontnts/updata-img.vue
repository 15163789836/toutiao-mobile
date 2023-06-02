<template>
  <div class="img-box">
    <img id="image" class="img" :src="imgsrc" alt="" />

    <van-nav-bar
      class="nav-bar img-box"
      left-text="返回"
      right-text="完成"
      left-arrow
      @click-left="$emit('cancel')"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";

export default {
  props: {
    file: {},
  },
  data() {
    return {
      imgsrc: window.URL.createObjectURL(this.file),
      cropper:null,
    };
  },
  mounted() {
    const image = document.getElementById("image");
    this.cropper = new Cropper(image, {
      //   aspectRatio: 16 / 9,
      viewMode: 1,
      dragMode: "move", // 是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
      //    autoCropArea: 1, // 0-1之间的数值，定义自动剪裁区域的大小，默认0.8
      aspectRatio: 1,
      cropBoxMovable: false,
      cropBoxResizable: false,
      background: false,
      movable: true, // 是否允许移动剪裁框

      //   preview: '.previewImg',// 预览视图
      // guides: false, // 裁剪框的虚线(九宫格)

      // movable: false, // 是否允许移动图片

      // movable: true, // 是否允许移动剪裁框     v
      // resizable: true, // 是否允许改变裁剪框的大小
      // scalable:false, //是否可以缩放图片
      // zoomable: true, // 是否允许缩放图片大小
      // mouseWheelZoom: false, // 是否允许通过鼠标滚轮来缩放图片
      // touchDragZoom: false, // 是否允许通过触摸移动来缩放图片
      // rotatable: true, // 是否允许旋转图片

      //   aspectRatio: 16 / 9,
      //   crop(event) {
      //     console.log(event.detail.x);
      //     console.log(event.detail.y);
      //     console.log(event.detail.width);
      //     console.log(event.detail.height);
      //     console.log(event.detail.rotate);
      //     console.log(event.detail.scaleX);
      //     console.log(event.detail.scaleY);
      //   },
    });

  },
  methods: {


      getcropped(){
          return new Promise(resolve => {

              this.cropper.getCroppedCanvas().toBlob((blob)=>{ // 这段也可以直接用 这是吧裁剪后的图片拿出来
                  resolve(blob)
              })

          })

      },

    async onClickRight() {

        const file = await this.getcropped()
        console.log('file图片',file );//拿到裁剪的图片



      const fd = new FormData();
      fd.append("photo", this.file); // 提交文件要用formdata格式


      this.$emit("updata-img", window.URL.createObjectURL(file),);

    //   this.$emit("updata-img", this.imgsrc);
      this.$emit("cancel");
    },
  },
};
</script>

<style lang="less" scoped>
.img-box {
  // background-color: #000;
}
/deep/.van-popup--bottom {
  background-color: #000 !important;
}
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  // background: #000;
}
img {
  display: block;

  /* 这个规则很重要，请不要忽略这个 */
  max-width: 100%;
}
</style>