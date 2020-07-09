<template>
  <div>
    <p>PropsChild: {{ totalNumber }}</p>
  </div>
</template>
<script>

  export default {
    name: "",
    props:[ "totalNumber" ],
    data: () => ({
    }),
  }
</script>
<style lang="scss" scoped="scoped">
</style>