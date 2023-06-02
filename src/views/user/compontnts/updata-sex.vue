<template>
  <div>
       <van-picker
    show-toolbar
    :columns="columns"
    @cancel="$emit('cancel')"
    @confirm="onConfirm"
  />
  </div>
</template>

<script>
export default {
    props:{
        value:{

        }

    },
    data(){
        return {
            columns: ['男','女'],
        }
    },
    methods:{
         onConfirm(value) {
             console.log('value',value);
    //   this.value = value;
    //   this.showPicker = false;
      this.$emit('input',value)
      
      this.$emit('cancel')
    },
    }

}
</script>

<style>

</style>