<template>
  <div class="header-section">
    <img class="header-section__logo" src="../assets/bugsters.png">
    <div class="header-section_slogan">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et
      </p>
    </div>
    <h3>Verfügbares Budget</h3>
    <Slider></Slider>
    <button class="btn btn-lg btn-primary">Read More</button>
  </div>
</template>

<script>
import Slider from './Slider'

export default {
  name: 'HeaderSection',
  components: {
    Slider
  }
}
</script>

<style lang="sass">
</style>
