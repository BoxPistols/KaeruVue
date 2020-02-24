<template>
<div>
  <div id="todo">
    <div>
      <!-- v-on:keyup.enter="addTodo(newItemTitle) -->
      <input type="text" placeholder="TODOを入力しましょう！" v-model="newItemTitle">

      <select v-model="newItemSelect">
        <option value="DayWork">DayWork</option>
        <option value="NightWork">NightWork</option>
        <option value="ShortWork">ShortWork</option>
      </select>

      <select v-model="newItemJob">
        <option value="4番サード">4番サード</option>
        <option value="2番セカンド">2番セカンド</option>
        <option value="5番ライト">5番ライト</option>
      </select>

      <button type="button" name="button" v-on:click="addTodo(newItemTitle, newItemSelect, newItemJob)">追加</button>

    </div>
    <ul>
      <li v-for="item in items" :key="item.index">
        <p>
          <label v-bind:class="{ done: item.isChecked }">
            {{ item.title }} / {{ item.selItem }}  / {{ item.itemJob }}  <input type="checkbox" v-model="item.isChecked">
          </label>
        </p>
      </li>
    </ul>
    <button v-on:click="deleteTodo()">チェック済みの項目を削除する</button>
  </div>

</div>
</template>

<script>
export default {
  data: () => ({
    items: [{
        title: '加藤よしのり',
        isChecked: false,
        selItem: "DayWork",
        itemJob: "4番サード"
      },
      {
        title: '東海林未由来',
        isChecked: true,
        selItem: "NightWork",
        itemJob: "2番セカンド"
      },
      {
        title: '山形昭二',
        isChecked: false,
        selItem: "ShortWork",
        itemJob: "5番ライト"
      },
      {
        title: '磯野正道',
        isChecked: false,
        selItem: "DayWork",
        itemJob: "4番サード"
      },
    ],
    newItemTitle: '内野恋雪',
    newItemSelect: 'DayWork',
    newItemJob: '4番サード',

    active: false,
  }),
  methods: { //methodsオプションをまるっと追加
    addTodo: function(newItemTitle, newItemSelect, newItemJob) {
      if (this.newItemTitle.length < 1) {
        return false
      } else {
        this.items.push({
          title: newItemTitle,
          selItem: newItemSelect,
          itemJob: newItemJob,
          isChecked: false,
        });
      }
      this.newItemTitle = '内野恋雪'
      this.newItemSelect = 'DayWork'
      this.newItemJob = '4番サード'
    },
    // addSel: function() {
    //   this.items.push({
    //     selItem: this.selItem,
    //   });
    // },
    deleteTodo: function() {
      this.items = this.items.filter(function(item) {
        return item.isChecked === false //チェックが付いていないものはスルーする
      });
    },
  },
}
</script>

<style lang="stylus" scoped>
#todo
  max-width: 600px
  margin: auto
  text-align: left
  font-size 16px
li
  line-height: 2;
  list-style: none;
  display: flex;
  width: 100%
.done
  text-decoration: line-through
input, button, select
  margin 4px
  outline none
  border: 1px solid #ccc
  font-size 18px
  background none
  background-color aliceblue
  border-radius: 6px
  padding 8px
 select
   height 40px
</style>
