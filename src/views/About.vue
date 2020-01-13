<template>
<div id="about">
  <input type="text" v-model.number="budget">円以下に絞り込み
  <input type="number" v-model.number="limit">件表示
  <p>{{ matched.length }} 件中{{ limited.length }}</p>
  <br>
  <input type="text" v-model.number="budgetA">Name
  <p> Nameマッチ {{ matchedTex.length }} 件 / {{ list.length }}</p>
  <table>
    <th>Name</th>
    <th>Price</th>
    <tr v-for="item in limited" :key="item.id">
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>{{ budgetA }}</td>
      <td>{{ matchedTex1.length }}</td>
    </tr>
    <tr>
      <td>{{ budgetB }}</td>
      <td>{{ matchedTex2.length }}</td>
    </tr>

  </table>
  <!-- <ul>
    <li v-for="item in limited" :key="item.id">
      {{ item.name }} {{ item.price }}円
    </li>
  </ul> -->
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    budget: 400,
    budgetA: 'メロン',
    budgetB: 'りんご',
    limit: 3,
    list: [{
        id: 1,
        name: 'りんご',
        price: 100
      },
      {
        id: 2,
        name: 'バナナ',
        price: 200
      },
      {
        id: 3,
        name: 'オレンジ',
        price: 300
      },
      {
        id: 4,
        name: 'メロン',
        price: 400
      },
      {
        id: 5,
        name: 'メロン',
        price: 300
      },
    ]
  }),
  computed: {
    // price
    matched: function() {
      return this.list.filter(function(el) {
        return el.price <= this.budget
      }, this)
    },
    // name
    matchedTex: function() {
      return this.list.filter(function(el) {
        return el.name === this.budgetA
      }, this)
    },
    matchedTex1: function() {
      return this.list.filter(function(el) {
        return el.name === this.budgetA
      }, this)
    },
    matchedTex2: function() {
      return this.list.filter(function(el) {
        return el.name === this.budgetB
      }, this)
    },
    limited: function() {
      return this.matched.slice(0, this.limit)
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
