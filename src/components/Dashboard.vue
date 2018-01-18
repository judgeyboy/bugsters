<template>
  <div class="dashboard">

    <MenuBar :foo="true">
      <router-link slot="menu" to="/">BUGSTERS</router-link>
    </MenuBar>

    <h2>My Dashboard</h2>
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Dashboard',
  components: {
    MenuBar
  }
}
</script>

<style lang="sass" scoped>

</style>
