<template>
  <div class="empty">
    <div class="empty-icon">
      <i class="icon icon-3x icon-link"></i>
    </div>
    <p class="empty-title h5">You don't have any orders!</p>
    <p class="empty-subtitle">
      Click the button to submit an order with us
    </p>
    <div class="empty-action">
      <router-link class="btn btn-primary" to="/">Submit an order</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoOrders'
}
</script>

