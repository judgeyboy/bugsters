<template>
  <div class="dashboard">
    <h2>DASHBOARD</h2>
    <div class="columns">
      <div class="column col-sm-12 col-6">
        <Orders />
      </div>
    </div>
  </div>
</template>

<script>
import Orders from './Orders'

export default {
  name: 'Dashboard',
  components: {
    Orders
  }
}
</script>
