<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'spectre.css/src/spectre-exp.scss'
import 'spectre.css/src/spectre-icons.scss'
import 'animate.css/animate.css'
import './styles/base.sass'

export default {
  name: 'app'
}
</script>

<style lang="sass">
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
