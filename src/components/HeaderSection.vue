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
    <h2>Verfügbares Budget</h2>
    <Slider></Slider>
    <button style="margin-top: 40px" class="button">Kaufen</button>
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

<style lang="sass" scoped>
.header-section
  background-color: $background-grey

  &_slogan
    width: 450px
    margin: 40px auto

    p
      font-family: $font-stack
      font-weight: 200
      font-size: 20px
      color: #000000
      text-align: center
</style>
