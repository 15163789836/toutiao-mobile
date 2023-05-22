import dayjs from "dayjs";
import Vue from 'vue';
import 'dayjs/locale/zh-cn'

import relativeTime from 'dayjs/plugin/relativeTime'



Vue.filter('relativeTime',value =>{
    return dayjs(value).from(dayjs())
})  //过滤器  相对当前时间过去了多久


dayjs.extend(relativeTime)

// 使用中文语言包
dayjs.locale('zh-cn')

console.log(dayjs().format('YYYY-MM-DD HH:mm:ss' ));