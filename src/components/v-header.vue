<template>
    <section :class="[prefixCls]">
        <ul :class="[prefixCls + '-ul']">
            <router-link :to="'/' + items" v-for="(items, index) in menuItem">
                <li :class="[prefixCls + '-li',
                        {[prefixCls + '-item-active']: active === index}]"
                    @click="handlerClick(items, index)">
                    {{items}}
                </li>
            </router-link>
        </ul>
    </section>
</template>

<script>
    const prefixCls = 'cv-menu'
    export default {
      name: 'cvMenu',
      data: function () {
        return {
          prefixCls: prefixCls,
          active: null,
          menuItem: [
            'alert', 'modal', 'timePicker', 'carousel', 'timeLine', 'pagination'
          ]
        }
      },
      methods: {
        handlerClick (items, index) {
          if (items === this.menuItem[index]) {
            this.active = index
          }
        }
      }
    }
</script>