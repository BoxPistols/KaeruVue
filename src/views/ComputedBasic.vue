<template>
<div id="computedBasic">
  <div class="reactiveData">
    <h2>computedBasic</h2>
    <div v-show="show">
      <p>now1: "{{ now1() }}"</p>
      <p>now2: "{{ now2 }}"</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "computedBasic",
  data: () => ({
    show: true,
  }),
  methods: {
    now1: function() {
      return (new Date()).toLocaleString();
    },
  },
  // has () Error
  computed: {
    now2: function() {
      return (new Date()).toLocaleString();
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
