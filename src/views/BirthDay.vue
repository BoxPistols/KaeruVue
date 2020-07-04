<template lang="">
<!-- 年齢別の料金設定 -->
  <div>
    <p>Date: {{ hYear }} 年</p>
    <h2>成人価格/未成年価格</h2>
    <p>名前： <input type="text" v-model="name"></p>
    <p>年齢： <input type="number" v-model="age"></p>
    <!-- <p>名前：{{ name }}</p> -->
    <!-- <p>年齢：{{ age }}</p> -->
    <p class="bold">料金：{{ price }}
      <span v-if="age < 18">未成年</span>
      <span v-else>成年</span>
    </p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "",
  data: () => ({
    name: "Tanaka Ichiro",
    age: 17,
    sYear: 2020
  }),
  computed: {
    price: function() {
      if (this.age >= 18) {
        return 1000
      } else {
        return 800
      }
    },
    hYear: {
      get(){
        return this.sYear - 1988
      },
      set(newValue){
        this.sYear = newValue + 1988
      }
    }
  },
  methods: {}
};
/* eslint-enable */
</script>

<style lang="sass" scoped>
.bold
  font-weight: 600
  font-size: 24px
h2, input
  font-size: 18px
span
  color: pink
  font-size: 14px
</style>