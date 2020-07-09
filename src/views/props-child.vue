<template>
  <div>
    <p>PropsChild: {{ totalNumber }}</p>
  </div>
</template>
<script>

  export default {
    name: "",
    props:{
      totalNumber: {
        type: Number,
        default: 5,
        /**
         * 必須設定
         * required: true
         */
      }
    },
    data: () => ({
    }),
  }
</script>
<style lang="scss" scoped="scoped">
</style>