<template>

  <div class="off-canvas">

    <div class="bugster-navbar">
      <div class="bugster-navbar__menu">
        <a class="off-canvas-toggle btn btn-link btn-action" @click="toggleSidebar">
          <i class="icon icon-menu"></i>
        </a>
      </div>

      <div class="bugster-navbar__link">
        <router-link class="btn btn-primary" to="dashboard">Dashboard</router-link>
      </div>
    </div>

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
    ScrollLink
  },

  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>

<style lang="sass" scoped>
.bugster-navbar
  height: 3.8rem
  position: fixed
  display: block
  right: 0
  left: 12rem
  top: 0
  z-index: 200
  background-color: white

  &__menu
    position: absolute
    left: 1.5rem
    top: 1rem
    font-size: 1rem

  &__link
    position: absolute
    right: 1.5rem
    top: 1rem

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

  .bugster-navbar
    left: 0

  .bugster-content
    margin: 3.8rem 0 0 0

.off-canvas .off-canvas-sidebar
  width: 12rem

.off-canvas .off-canvas-toggle
  left: 0
  top: 0

</style>
