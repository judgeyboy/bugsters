<template>
  <div class="dashboard">

    <MenuBar :foo="true">
      <router-link slot="menu" to="/">BUGSTERS</router-link>
    </MenuBar>

    <div class="dashboard-content">
      <h2>My Dashboard</h2>
    </div>

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

.dashboard-content
  margin: 3.8rem 0 0 0
  padding: .4rem

</style>
