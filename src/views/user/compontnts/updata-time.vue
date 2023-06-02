<template>
 <div>
   <van-datetime-picker
  v-model="currentDate"
  type="date"
  title="选择年月日"
  :min-date="minDate"
  :max-date="maxDate"
    @cancel="$emit('cancel')"
    @confirm="onConfirm"
/>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
    props:{
        value:{

        }
    },
    data(){
        return{
            minDate: new Date(2020, 0, 1),
           maxDate: new Date(2025, 10, 1),
          currentDate: new Date(this.value),
        }
    },
    mounted(){
        console.log(this.value);
    },
    methods:{
        onConfirm(value){

          

            console.log('value',  dayjs(value).format('YYYY-MM-DD')); //dayjs改变时间类型 
           
            this.$emit('input', dayjs(value).format('YYYY-MM-DD'))
            
             this.$emit('cancel')


        }

    }

}
</script>

<style>

</style>