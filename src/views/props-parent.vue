<template>
  <div>
    <h2>this nums {{ totalNumber }} </h2>

    <div class="fx">
      <!--<PropsChild :total-number="totalNumber" :text-props="textProps" @my-emit="totalNumber = $event"/>-->

      <PropsChild :total-number="totalNumber" :text-props="`Hi`" @my-emit="incNum"/>
    </div>
    <!-- <div class="fx">
      <PropsChild :text-props="`です`"/>/ デフォルト
    </div>
    <div class="fx">
      <PropsChild :total-number="totalNumber" :text-props="ます"/>/ Data
    </div> -->
    <p>{{ halfCalc }}</p>
    <!-- <button class="button" @click="increment">Increment</button> -->
  </div>
</template>

<script>
import PropsChild from "./props-child";

export default {
  name: "props-parent",
  data: () => ({
    totalNumber: 0,
    textProps: "テキスト"
  }),
  computed: {
    halfCalc(){
      return parseInt(this.totalNumber / 2)
    }
  },
  methods: {
    incNum(v){
      this.totalNumber = v
    }
  },
  // methods: {
  //   increment(){
  //     this.totalNumber += 1
  //   }
  // },
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