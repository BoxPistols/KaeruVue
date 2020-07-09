<template>
  <div>
    <h2>this nums {{ totalNumber }}</h2>

    <div class="fx">
      <PropsChild :totalNumber="15" />/ 固定
    </div>
    <div class="fx">
      <PropsChild />/ デフォルト
    </div>
    <div class="fx">
      <PropsChild :total-number="totalNumber" />/ Data
    </div>

    <p>{{ halfCalc }}</p>

    <button class="button" @click="increment">Increment</button>
  </div>
</template>

<script>
import PropsChild from "./props-child";

export default {
  name: "",
  data: () => ({
    totalNumber: 12
  }),
  computed: {
    halfCalc(){
      return parseInt(this.totalNumber / 2)
    }
  },
  methods: {
    increment(){
      this.totalNumber += 1
    }
  },
  components:{
    PropsChild
  },
}
</script>
<style lang="stylus" scoped="scoped">
.fx
  display flex
  align-items center
</style>