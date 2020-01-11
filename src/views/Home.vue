<template>
<div class="home">
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <input type="text" v-bind:value="msg" v-bind:style="{fontSize: pSize}" v-bind:class="{active: isActive}">
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  data: () => ({
    msg: "HI",
    pSize: '32px',
    isActive: true,
  }),
  components: {
    HelloWorld
  }
}
</script>
<style lang="stylus">
.active
  color: teal
</style>
