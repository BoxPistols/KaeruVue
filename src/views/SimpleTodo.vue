<template>
<div>
  <div id="todo">
    <div>
      <button type="button" name="button" v-on:click="addTodo(newItemTitle)">追加</button>
      <!-- <input type="text" placeholder="TODOを入力しましょう！" v-model="newItemTitle" v-on:keyup.enter="addTodo(newItemTitle)"></p> -->
      <input type="text" placeholder="TODOを入力しましょう！" v-model="newItemTitle">

      <select v-on:change="addSel" v-model="selItem">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

    </div>
    <ul>
      <li v-for="item in items" :key="item.index">
        <label v-bind:class="{ done: item.isChecked }">
          <input type="checkbox" v-model="item.isChecked"> {{ item.title }}
        </label>
        <p>{{ item.selItem }}</p>
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
        title: '領収書を準備する',
        isChecked: true,
        selItem: 1,
      },
      {
        title: 'Vue.jsハンズオンの資料を作る',
        isChecked: true,
        selItem: 2
      },
      {
        title: '参加者の人数を確認する',
        isChecked: false,
        selItem: 2,
      },
      {
        title: 'ピザを注文する',
        isChecked: false,
        selItem: 1,
      },
    ],
    newItemTitle: '', //追加
    active: false,
  }),
  methods: { //methodsオプションをまるっと追加
    addTodo: function(newTitle) {
      this.items.push({
        title: newTitle,
        isChecked: false
      });
      this.newItemTitle = ''
    },
    addSel: function() {
      this.items.push({
        selItem: this.selItem,
      });
    },
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
</style>
