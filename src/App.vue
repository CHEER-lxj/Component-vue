<template>
  <div id="app" class="app">
    <vHeader></vHeader>
    <router-view/>
  </div>
</template>

<script>
  import vHeader from './components/v-header'
  export default {
    name: 'app',
    components: {vHeader}
  }
</script>

<style>
.app {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
}
</style>
