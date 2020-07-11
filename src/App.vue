<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/computedBasic">ComputedBasic</router-link>
      <router-link to="/hasEvent">HasEvent</router-link>
      <router-link to="/resize">Resize</router-link>
      <router-link to="/simpleTodo">SimpleTodo</router-link>
      <router-link to="/birthDay">BirthDay</router-link>
      <router-link to="/getSet">getSet</router-link>
      <router-link to="/props">Props</router-link>
      <router-link to="/slot">slot</router-link>
    </div>
    <div class="contents">
      <router-view />
    </div>
  </div>
</template>

<style lang="stylus">
body
  padding 2vw
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  //text-align: center;
  color: #2c3e50
  margin: 60px auto 0
  font-size: 20px
  display flex
  justify-content center
  max-width 800px

#nav
  display flex
  flex-direction column
  margin-right 2vw
  font-size 20px
  line-height 2
  width 20vw

.contents
  width 80vw
</style>
