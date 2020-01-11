<template>
<div class="home">
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <input type="text" v-bind:value="msg" v-bind:style="{fontSize: pSize}" v-bind:class="{active: isActive}">

  <table border="1">
    <tr v-for="item in products" :key="item.code">
      <td>{{ item.code }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.price | number_format | unit}} <span v-if="item.price > 1000"> {{ p_hiMsg }} </span><span v-else>送料別</span> </td>
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
    ]
  }),
  components: {
    // HelloWorld
  },
  methods: {
    // HelloWorld
  },
  filters: {
    // 3桁表示
    number_format: function(val) {
      return val.toLocaleString();
    },
    // 単位
    unit: function(val) {
      return val + '円'
    }
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
