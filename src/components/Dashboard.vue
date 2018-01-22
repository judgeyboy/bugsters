<template>
  <div class="dashboard">
    <MenuBar :foo="true">
      <router-link slot="menu" to="/">BUGSTERS</router-link>
    </MenuBar>

    <div class="dashboard-content">
      <h2>DASHBOARD</h2>
      <div class="columns">
        <div class="column col-sm-12 col-6">
          <Orders />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Orders from './Orders'
import MenuBar from './MenuBar'

export default {
  name: 'Dashboard',
  components: {
    MenuBar,
    Orders
  }
}
</script>

<style lang="sass" scoped>
.dashboard-content
  margin: 3.8rem 0 0 0
  padding: .4rem
</style>
