<template>
  <div id>
    <h1>Counter</h1>
    <button @click="counter += 1">Counter</button>
    <p>\{{ counter >= 5 ? '5以上' : '5未満' }\}</p>
    <hr />
    <p>課題： 計算式を直書きしてるので、これをComputedプロパティで表示する</p>
    <p>{{ counter }}</p>
    <p>{{ moreThanThree }}</p>
    <p>{{ counter }}</p>
    <hr />

    <h1>get / set</h1>
    <h2>消費税計算機</h2>
    <p>
      価格：
      <input type="number" v-model="price" />
    </p>
    <p>
      消費税込：
      <input type="number" v-model="inTax" />
    </p>
    <p class="res">税込み価格：{{ inTax }}</p>
    <p class="res">消費税：{{ onlyTax }}</p>
    <hr />
    <h2>今は平成何年？</h2>
    <p>
      今は
      <input type="number" v-model="nowYear" />年
    </p>
    <p>
      平成なら{{ heisei }}年
      <input type="number" v-model="heisei" />年
    </p>
    <p>ちなみに令和なら: {{ reiwa }}年</p>

    <hr />
    <h1>v-show</h1>
    <div>
      <button @click="active = !active">Toggle</button>
      <p>
        <span v-show="active">Show is display</span>
      </p>// v-if can use template
      <p>
        <template v-if="active">Show is dom controll</template>
      </p>
    </div>

    <hr />
    <h1>if-else Reactive</h1>
    <div>
      <h2>今{{ time }}時</h2>
      <p v-if="getTime() == 'morning' ">おはようザマス</p>
      <p v-else-if="getTime() == 'afternoon' ">こんちくわ</p>
      <p v-if="getTime() == 'evening' ">こんばんはー</p>
    </div>
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
    counter: 0,
    price: 1000, // 初期化
    nowYear: 2020,
    active: false,
    time: ((new Date()).getHours() + 0), // 時間取得 1桁数値
  }),
  methods: {
    getTime(){
      if(0 <= this.time & this.time < 12){
        return 'morning'
      } else if(12 < this.time & this.time < 18){
        return 'afternoon'
      } else {
        return 'evening'
      }
    }
  },
  //同期処理
  computed: { // 計算
    moreThanThree: function() {
      return this.counter >= 5 ? '5以上' : '5未満'
    },
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
  },
  // 非同期処理
  watch: {
    counter(){
      let vm = this
      setTimeout(function(){
        vm.counter = 0
      }, 3000)
    }
  }
}
</script>

<style lang="stylus" scoped="scoped">
input {
  font-size: 24px;
}

h1 {
  font-size: 32px;
  color: orange;
}

h2 {
  font-size: 18px;
}

.res {
  font-size: 20px;
}

color {
  orange;
}
</style>