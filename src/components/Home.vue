<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <Slider></Slider>
  </div>
</template>

<script>
  import Slider from './Slider.vue'

  export default {
    name: 'Home',
    data () {
      return {
        message: 'Welcome to Bugsters!'
      }
    },
    components: {
      Slider
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
