<template>
  <div>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'FormErrorMessage',
  props: ['message'],
  computed: {
    msg () {
      return this.message || 'Form contains error, please check the red fields.'
    }
  }
}
</script>

<style lang="sass" scoped>
div
  padding: 0.4rem 0
span
  color: #e85600
</style>
