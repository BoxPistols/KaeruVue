<template>
  <div>
    <h2>this nums {{ nums }}</h2>
    <PropsChild nums="15" />
    <PropsChild nums="10" />
    <PropsChild :nums="nums" />
  </div>
</template>

<script>
import PropsChild from "./props-child";

export default {
  name: "",
  data: () => ({
    nums: 12
  }),
  components:{
    PropsChild
  }
}
</script>
<style lang="scss" scoped="scoped">
</style>