<template>
  <div>
    <slot>デフォスロット</slot>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "",
  props: ["myProp"],
  data: () => ({
    tx: "in slot message"
  }),
}
</script>

<style lang="sass" scoped>
// Slot先のスタイル指定
h1
  color: red
p
  color: pink
</style>