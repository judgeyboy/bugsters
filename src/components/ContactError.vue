<template>
  <div class="order-error">
    <div class="empty">
      <div class="empty-icon">
        <i class="icon icon-3x icon-stop"></i>
      </div>
      <p class="empty-title h5">Ooops! How embarrasing!</p>
      <p class="empty-subtitle">
        It looks like something went horribly wrong...
      </p>
      <div class="empty-action">
        <a @click="close">Please Try Again</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactError',
  methods: {
    close () {
      this.$emit('closeError')
    }
  }
}
</script>
