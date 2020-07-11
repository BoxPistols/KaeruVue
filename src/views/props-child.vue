<template>
  <div>
    <p>PropsChild: {{ totalNumber }} | {{ textProps }}</p>
    <button @click="increment">MyIncrement</button>
  </div>
</template>

<script>
export default {
  name: "props-child",
  data() {
    return {
    }
  },
  // props: ["totalNumber", "textProps"],
  /**
   * Props option 必須設定
   * required: true
   */
  props:{
    totalNumber: {
      //default: 5
    },
    textProps: {
      // type: [String, Number],
      type: String,
      default: "かかか"
    }
  },
  methods: {
    increment(){
      this.$emit("my-emit", this.totalNumber + 1)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
</style>