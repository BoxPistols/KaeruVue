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

      <select v-model="newItemDesign">
        <option value="allDay"><span class="allDay">allDay</span></option>
        <option value="halfDay">halfDay</option>
        <option value="night">night</option>
      </select>

      <div v-class="newItemDesign"></div>

      <span>{{ $data.newItemDesign}}</span>

      <!-- <div class="poke" v-for="(poke, i) in pokes" :key="i">
        <input
          :id="'poke' + i"
          type="checkbox"
          :value="poke"
          v-model="selectedPokes">
        <label :for="'poke' + i">{{poke}}</label>
      </div> -->

      <button type="button" name="button" v-on:click="addTodo(newItemTitle, newItemSelect, newItemJob, newItemDesign, poke, selectedPokes)">追加</button>


    </div>

    <ul>
      <li v-for="item in items" :key="item.index">
        <p>
          <label v-bind:class="{ done: item.isChecked }">
            <!-- {{ item.poke }} -->
             <span class="design">[ {{ item.design }} ] </span>
            {{ item.title }} / {{ item.selItem }} / {{ item.itemJob }}<input type="checkbox" v-model="item.isChecked">
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
    pokes: ["A", "B", "C"],
    selectedPokes: [],
    //allDay halfDay nigh halfNight
    items: [{
        title: '加藤よしのり',
        isChecked: false,
        selItem: "DayWork",
        itemJob: "4番サード",
        poke: "",
      },
      {
        title: '東海林未由来',
        isChecked: true,
        selItem: "NightWork",
        itemJob: "2番セカンド",
        poke: "",
      },
      {
        title: '山形昭二',
        isChecked: false,
        selItem: "ShortWork",
        itemJob: "5番ライト",
        poke: "",
      },
      {
        title: '磯野正道',
        isChecked: false,
        selItem: "DayWork",
        itemJob: "4番サード",
        poke: "",
      },
    ],
    newItemTitle: '内野恋雪',
    newItemSelect: 'DayWork',
    newItemJob: '4番サード',
    newItemDesign: 'allDay',
    active: false,
  }),
  methods: { //methodsオプションをまるっと追加
    addTodo: function(newItemTitle, newItemSelect, newItemJob, newItemDesign, selectedPokes) {
      if (this.newItemTitle.length < 1) {
        return false
      } else {
        this.items.push({
          title: newItemTitle,
          selItem: newItemSelect,
          itemJob: newItemJob,
          design: newItemDesign,
          // poke: selectedPokes,
          isChecked: false,
        });
        this.pokes.push({
          poke: selectedPokes
        });
      }
      this.newItemTitle = '内野恋雪'
      this.newItemSelect = 'DayWork'
      this.newItemJob = '4番サード'
      this.newItemDesign = 'allDay'
    },
    deleteTodo: function() {
      this.items = this.items.filter(function(item) {
        return item.isChecked === false //チェックが付いていないものはスルーする
      });
    },
  }
}
</script>

<style lang="stylus" scoped>
#todo
  max-width: 800px
  margin: 20px auto
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
.poke
  display: inline-flex
.allDay
  background-color navy
.design
  background-color orange
</style>
