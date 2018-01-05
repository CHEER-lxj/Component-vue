/**
 * @Author: lixuejiao
 * @Description:
 * @Date: Created in 18:45 2018/1/4
 */
<template>
  <section :class="[prefixCls]">
   <div>
     <h1>Alert 警示框</h1>
     <p>警告提示 展现需要关注的信息</p>
     <p>非浮层的显示，只显示，不消失，用户可以自定义关闭</p>
   </div>
   <div>

   </div>
  </section>

</template>

<script>
 const prefixCls = 'cv-alert'
 export default {
   data () {
     return {
       prefixCls: prefixCls
     }
   }
 }
</script>