<template lang="">
<!-- 年齢別の料金設定 -->
  <div>
    <p><input type="number" v-model="age"></p>
    <p>名前：{{ name }}</p>
    <p>年齢：{{ age }}</p>
    <p>料金：{{ price }}
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
    border: false
  }),
  computed: {
    price: function() {
      if (this.age >= 18) {
        return 1000;
      } else {
        return 800;
      }
    }
  },
  methods: {}
};
/* eslint-enable */
</script>

<style lang="sass" scoped>
span
  color: pink
  font-size: 14px
</style>