<template>
  <div class="order-success">
    <div class="empty">
      <div class="empty-icon">
        <i class="icon icon-3x icon-check"></i>
      </div>
      <p class="empty-title h5">Thank you for getting in touch</p>
      <p class="empty-subtitle">We'll get back to you as soon as possible</p>
      <div class="empty-action">
        <a @click="close">Close</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactSuccess',
  methods: {
    close () {
      this.$emit('closeSuccess')
    }
  }
}
</script>
