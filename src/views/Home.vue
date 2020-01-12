<template>
<div class="home">
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <div class="researchYear">
    <p v-bind:class="{active: isUrudoshi}">調べたい：</p>
    <p><input type="text" v-model="year"></p>
    <p v-bind:class="{active: isUrudoshi}">{{ year }}年は {{ isUrudoshi ? 'うるう年' : 'うるう違う' }}</p>
  </div>
  <!-- <input type="text" v-bind:value="msg" v-bind:style="{fontSize: pSize}" v-bind:class="{active: isActive}"> -->
  <table border="1">
    <tr v-for="item in products" :key="item.code">
      <td>{{ item.code }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.price | number_format | unit}} <span v-if="item.price > 1000"> {{ p_hiMsg }} </span><span v-else>送料別</span> </td>
    </tr>
    <tr>
      <td>
        <p>{{ products.length }}</p>
      </td>
      <td>
        <!-- <p v-for="value in products" :key="value">{{ value.name.length }}</p> -->
        <p>{{ dmyCalA.length + 2 }}</p>
      </td>
      <td>
        <!-- <p>{{ products[0].price + products[1].price }}</p> -->
        <!-- https://teratail.com/questions/200551 -->
        <p>合計： {{ totalMoney('') }}</p>
        <!-- <p>{{ this.products.length * 2}}</p> -->
      </td>
    </tr>
  </table>


</div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

// Vue.filter('number_format', function(val) {
//   return val.toLocalString();
// });

export default {
  name: 'home',
  data: () => ({
    msg: "HI",
    pSize: '20px',
    isActive: true,
    p_hiMsg: '送料込',
    year: (new Date()).getFullYear(),
    products: [{
        code: 'A1',
        name: 'ItemA',
        price: 300,
      },
      {
        code: 'B1',
        name: 'ItemB',
        price: 800,
      },
      {
        code: 'C1',
        name: 'ItemC',
        price: 1200,
      },
      {
        code: 'D1',
        name: 'ItemD',
        price: 1600,
      },
    ],
    list: [{
        moneyA: 1000,
        moneyB: 4000
      },
      {
        moneyA: 2000,
        moneyB: 5000
      },
      {
        moneyA: 3000,
        moneyB: 6000
      },
    ]
  }),
  components: {},
  computed: {
    isUrudoshi: function() {
      if ((this.year % 4 == 0) && (this.year % 100 != 0) || (this.year % 400 == 0)) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    totalMoney(type) {
      let sum = 0;
      // for (const item of this.list) {
      for (const item of this.products) {
        if (type === 'A') {
          sum += +item.moneyA;
        } else if (type === 'B') {
          sum += +item.moneyB;
        } else {
          sum += +item.price;
        }
      }
      return sum;
    },
    dmyCalA: function() {
      for (const calA of this.products) {
        if (calA.name === 'ItemA') {
          return calA
        }
      }
    },
  },
  filters: {
    // 3桁表示
    number_format: function(val) {
      return val.toLocaleString();
    },
    // 単位
    unit: function(val) {
      return val + '円'
    },
  }
}
</script>
<style lang="stylus">
.active
  color: teal

table
  margin: 24px auto
  border-collapse: collapse
  padding: 20px
  td
    padding: 8px 12px
    border: 1px solid #999
  span
    font-size: 10px

</style>
