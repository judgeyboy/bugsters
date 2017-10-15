<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './styles/base.sass'

export default {
  name: 'app'
}
</script>

<style lang="sass">
#app
  font-family: $font-stack
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
</style>
