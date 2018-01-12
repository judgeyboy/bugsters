<template>
  <div class="order-success">
    <div class="empty">
      <div class="empty-icon">
        <i class="icon icon-3x icon-check"></i>
      </div>
      <p class="empty-title h5">Great! We've received your request</p>
      <p class="empty-subtitle">
        We'll plan the test and send you an offer within two working days.
        Your request number is <strong>{{ orderId }}</strong>
        <br>
        <br>
        In the mean time, if you have any questions, please don't hesitate to
        <a v-section-scroll location="contact">contact us</a>
      </p>
      <div class="empty-action">
        <a @click="close">Close</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSuccess',
  props: ['orderId'],
  methods: {
    close () {
      this.$emit('closeSuccess')
    }
  }
}
</script>
