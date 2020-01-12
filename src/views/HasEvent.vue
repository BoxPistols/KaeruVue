<template>
<div>
  <div v-if="stock >= 1">
    <p class="num"> 在庫：{{ stock }} 個</p>
    <button class="btn" v-on:click="onDeleteItem">出荷</button>
  </div>
  <div v-else>
    <p>在庫切れ</p>
    <button class="btn" v-on:click="onAddItem">補充</button>
  </div>
</div>
</template>
<script>
export default {
  name: "hasEvent",
  data: () => ({
    stock: 5
  }),
  methods: {
    onDeleteItem: function() {
      this.stock--
    },
    onAddItem: function() {
      this.stock = 3
    },
  }
}
</script>

<style lang="stylus" scoped>
.btn
  font-size 18px
  background none
  background-color aliceblue
  border-radius: 6px
  padding 8px 24px
</style>
