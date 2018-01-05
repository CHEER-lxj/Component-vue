/**
 * @Author: lixuejiao5
 * @Description:
 * @Date: Created in 20:28 2018/1/5
 */

<template>
 <alert>
  <span>我是题目</span>
  <span slot="desc">我是内容描述</span>
 </alert>
</template>

<script>
  import alert from './alert.vue'
  export default {
    name: 'mainContent',
    data () {
      return {
      }
    },
    components: {
      alert
    }
  }
</script>