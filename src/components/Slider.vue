<template>
  <div class="slider">
    <input title="Money Slider"
           type="range"
           max="100"
           min="0"
           v-model="coverage" />
    <h2>{{ price }}.- CHF</h2>
  </div>
</template>

<script>
  export default {
    name: 'Slider',
    data () {
      return {
        coverage: 10
      }
    },
    computed: {
      price: function () {
        return this.coverage * 10 * 2.5
      }
    }
  }
</script>