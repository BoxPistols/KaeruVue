<template>
  <div>
<<<<<<< HEAD
    <p>PropsChild: {{ totalNumber }} | {{ textProps }}</p>
    <button @click="increment">MyIncrement</button>
=======
    <p>なむ {{ num }}</p>
>>>>>>> 23bb75c4760859fec8e38523952687eab1028017
  </div>
</template>

<script>
<<<<<<< HEAD
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
      type: Number,
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
=======

export default {
  name: "",
  props: ['num'],
  data: () => ({
  }),
}
</script>

<style lang="sass" scoped>
>>>>>>> 23bb75c4760859fec8e38523952687eab1028017
</style>