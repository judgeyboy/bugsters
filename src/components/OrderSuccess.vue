<template>
  <div class="order-success text-center">
    <img :src="require('@/assets/cute-bug.png')" width="250">
    <h1 style="color: #444BCE; font-size: 3.5em; font">Good News!</h1>
    <p>
      Great! We've received your request.
      We'll plan the test and send you an offer within two working days.
      Your request number is <strong>{{ orderId }}</strong>.
    </p>
    <p>
      In the mean time, if you have any questions, please don't hesitate to
      <a v-section-scroll location="contact">contact us</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'OrderSuccess',
  props: ['orderId']
}
</script>

<style lang="sass" scoped>
h1
  color: #444BCE
  font-size: 3.5em
  font-weight: 500

p
  font-size: 1.5em
  font-weight: 500

</style>
