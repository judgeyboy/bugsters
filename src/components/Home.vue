<template>

  <div class="off-canvas">

    <nav-bar @toggleSidebar="toggleSidebar" />

    <side-bar :showSidebar="showSidebar" />

    <a class="off-canvas-overlay" @click="toggleSidebar"></a>

    <div class="off-canvas-content bugster-content">
      <HeaderSection></HeaderSection>
      <div class="container">
        <AboutSection></AboutSection>
        <HowSection></HowSection>
        <OrderSection></OrderSection>
        <ContactSection></ContactSection>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSection from './HeaderSection'
import AboutSection from './AboutSection'
import HowSection from './HowSection'
import ContactSection from '@/containers/ContactSection'
import OrderSection from '@/containers/OrderSection'
import NavBar from './NavBar'
import SideBar from './SideBar'

export default {
  name: 'Home',

  data () {
    return {
      showSidebar: false
    }
  },

  components: {
    HeaderSection,
    AboutSection,
    HowSection,
    ContactSection,
    OrderSection,
    NavBar,
    SideBar
  },

  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>

<style lang="sass" scoped>
.bugster-content
  width: calc(100vw - 12rem)

@media (max-width: 960px)

  .bugster-content
    margin: 3.8rem 0 0 0

</style>
