<template>
    <section :class="[prefixCls]">
        <ul>
            <li>alert</li>
            <li>modal</li>
            <li>timePicker</li>
            <li>carousel</li>
            <li>timeLine</li>
            <li>pagination</li>
        </ul>
    </section>
</template>

<script>
    const prefixCls = 'cv-menu'
    export default {
      name: 'cvMenu',
      data: function () {
        return {
          prefixCls: prefixCls
        }
      }
    }
</script>