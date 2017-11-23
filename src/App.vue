<template>
  <div id="app" class="container">
    <MenuBar></MenuBar>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar'
import './styles/base.sass'

export default {
  name: 'app',
  components: {
    MenuBar
  }
}
</script>

<style lang="sass">
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
