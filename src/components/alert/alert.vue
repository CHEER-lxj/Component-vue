/**
 * @Author: lixuejiao
 * @Description:
 * @Date: Created in 18:45 2018/1/4
 */
<template>
  <section :class="[prefixCls]">
     <transition>
        <div>
           <!--<span>
              <slot></slot>
           </span>-->
           <span :class="messageClass"><slot></slot></span>
           <span><slot name="desc"></slot></span>
        </div>
     </transition>
  </section>

</template>

<script>
 const prefixCls = 'cv-alert'
 export default {
   name: 'alert',
   data () {
     return {
       prefixCls: prefixCls
     }
   },
   computed: {
     messageClass () {
       return `${prefixCls}-message`
     }
   }
 }
</script>