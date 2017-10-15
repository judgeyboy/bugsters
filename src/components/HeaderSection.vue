<template>
  <div class="header-section">
    <img class="header-section__logo" src="../assets/bugsters.png">
    <div class="header-section_slogan">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt sequi molestias odit!
      </p>
    </div>
    <Slider></Slider>
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
    margin: 0 auto

    p
      font-family: $font-stack
      font-weight: 200
      font-size: 20px
      color: #000000
      text-align: justify
</style>
