<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/computedBasic">ComputedBasic</router-link> |
      <router-link to="/hasEvent">HasEvent</router-link> |
      <router-link to="/resize">Resize</router-link> |
      <router-link to="/simpleTodo">simpleTodo</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  font-size: 24px
</style>
