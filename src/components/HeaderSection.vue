<template>
  <div class="header-section">
    <div class="container">
      <div class="columns">
        <div class="column col-12">
          <h1>Welcome to Bugsters - Thank you Travis!</h1>
          <h2>Home of Professional Software Testers</h2>
          <scroll-link location="#about">Read More</scroll-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollLink from './ScrollLink'

export default {
  name: 'HeaderSection',
  components: {
    ScrollLink
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
