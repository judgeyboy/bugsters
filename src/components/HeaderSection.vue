<template>
  <div class="header-section">
    <div class="container">
      <div class="columns">
        <div class="column col-12">
          <h1>Welcome to Bugsters!</h1>
          <h2>Home of Professional Software Testers</h2>
          <a @click="smoothScroll()">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from './Slider'

export default {
  name: 'HeaderSection',
  components: {
    Slider
  },
  methods: {
    smoothScroll: function () {
      document.querySelector('#about').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}
</script>

<style lang="sass">
.header-section
  height: 100vh
  width: 100vw
  background-color: #4346D1
  color: white
  text-align: center

  a
    color: white
    bottom: 0
</style>
