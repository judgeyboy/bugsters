<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './styles/base.sass'
import 'spectre.css/dist/spectre.css'
import 'spectre.css/dist/spectre-icons.css'
import 'spectre.css/dist/spectre-exp.css' // is this ok what I'm doing?

export default {
  name: 'app'
}
</script>

<style lang="sass">
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
