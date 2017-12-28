<template>

  <div class="off-canvas">

    <nav-bar @toggleSidebar="toggleSidebar" />

    <div class="off-canvas-sidebar" :class="showSidebar ? 'active': ''">
      <div class="bugster-sidebar">
        <div class="bugster-nav__content">
          <ul class="nav">
            <li class="nav-item active">
              <scroll-link location="#about">ABOUT US</scroll-link>
            </li>
            <li class="nav-item">
              <a href="#">OUR PASSION</a>
            </li>
            <li class="nav-item">
              <a href="#">OUR MISSION</a>
            </li>
            <li class="nav-item">
              <a href="#">TRY US</a>
            </li>
            <li class="nav-item">
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>

    </div>

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
import ScrollLink from './ScrollLink'
import NavBar from './NavBar'

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
    ScrollLink,
    NavBar
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

.bugster-sidebar
  bottom: 1.5rem
  -webkit-overflow-scrolling: touch
  overflow-y: auto
  padding: .5rem 1.5rem
  position: fixed
  top: 3.5rem
  width: 12rem

@media (max-width: 960px)

  .bugster-content
    margin: 3.8rem 0 0 0

.off-canvas .off-canvas-sidebar
  width: 12rem

</style>
