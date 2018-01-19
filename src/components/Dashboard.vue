<template>
  <div class="dashboard">
    <h2>DASHBOARD</h2>
    <div class="columns">
      <div class="column col-4">
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
