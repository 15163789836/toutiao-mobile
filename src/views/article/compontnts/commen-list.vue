<template>
<!-- 评论 -->
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <!-- <van-cell v-for="item in list" :key="item" :title="item" > -->
      <item v-for="item in list" :key="item"  :item='item' @reply="$emit('reply',$event)" />
  <!-- </van-cell> -->
</van-list>


</template>

<script>
import item from './commen-item.vue'
export default {
  components:{
      item
  },
  props:{
    list:{
      type:Array,
      default:()=>[]

    }
  },
    data(){
        return {
            //  list: [],
             loading: false,
              finished: false,
        }

        
    
    },
    created(){

    },
    mounted(){
        
    },

    methods:{
      onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },

    },

    watch:{

    }
   
    

}
</script>

<style>

</style>