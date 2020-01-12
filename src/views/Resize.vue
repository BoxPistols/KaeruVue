<template>
<div id="resize">
  <p>resize</p>
  <p>{{ width}}</p>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    width: window.innerWidth
  }),
  created: function() {
    addEventListener('resize', this.resizehandler);
  },
  beforeDestroy: function() {
    removeEventListener('resize', this.resizehandler);
  },
  methods: {
    resizehandler: function($event) {
      this.width = $event.target.innerWidth;
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
