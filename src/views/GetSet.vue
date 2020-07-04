<template>
  <div id="">
    <h2>消費税計算機</h2>
    <p>価格：
      <input type="number" v-model="price"></p>
    <p>消費税込：<input type="number" v-model="inTax"></p>
    <p class="res">税込み価格：{{ inTax }}</p>
    <p class="res">消費税：{{ onlyTax }}</p>
    <hr>
    <h2>今は平成何年？</h2>
    <p>今は<input type="number" v-model="nowYear">年</p>
    <p>平成なら{{ heisei }}年 <input type="number" v-model="heisei">年</p>
    <p>ちなみに令和なら: {{ reiwa }}年</p>
  </div>
</template>

<script>
/**
 * get/set参考： http://jsstudy.hatenablog.com/entry/JavaScript-Framework-Introduction_4-3-2_Vue_get-set
 * Why get/set? Computed?
 * Computedでも変更に対応させる
 * get: 値の取得メソッド 計算、取得結果をもとのDataに対して更新を行う
 * set: 値の変更メソッド Dataの値に対して作用させる、元の値を表示
 */
export default {
  name: "",
  data: () => ({
    price: 1000, // 初期化
    nowYear: 2020
  }),
  computed: { // 計算
    inTax: { // 定義
      get: function() {
        return parseInt(this.price * 1.1)
      },
      set: function(v) {
        this.price = Math.ceil(v / 1.1)
      }
    },
    onlyTax() {
      return Math.ceil(this.price * 0.1)
    },
    heisei: {
      get: function() {
        return this.nowYear - 1988
      },
      set: function(v) {
        this.nowYear = v + 1988
      }
    },
    reiwa(){
      if(this.nowYear >= 2018){
        return this.nowYear - 2018
      }else{
        return null
      }
    }
  }
}
</script>

<style lang="stylus" scoped="scoped">
input
  font-size 24px
.res
  font-size 32px
color
  orange
</style>