<template>
<div>
  <div class="off-canvas">

    <div class="bugster-navbar">
      <a class="off-canvas-toggle bugster-navbar__menu btn btn-link btn-action" @click="toggleSidebar">
        <i class="icon icon-menu"></i>
      </a>

       <router-link class="btn btn-primary bugster-navbar__link" to="dashboard">Dashboard</router-link>

    </div>

    <div class="bugster-sidebar off-canvas-sidebar" :class="showSidebar ? 'active': ''">
      <div class="bugster-nav">
        <div class="bugster-nav__content">
          <ul class="nav">
            <li class="nav-item">
              <scroll-link location="#about">ABOUT US</scroll-link>
            </li>
            <li class="nav-item active">
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

.bugster-navbar__menu
  position: absolute
  left: 1.5rem
  top: 1rem
  font-size: 1rem

.bugster-navbar__link
  position: absolute
  right: 1.5rem
  top: 1rem

@media (max-width: 960px)

  .bugster-navbar
    left: 0

  .bugster-content
    margin: 3.8rem 0 0 0

.off-canvas .off-canvas-sidebar
  width: 12rem

.bugster-content
  width: calc(100vw - 12rem)

.bugster-nav
  bottom: 1.5rem
  -webkit-overflow-scrolling: touch
  overflow-y: auto
  padding: .5rem 1.5rem
  position: fixed
  top: 3.5rem
  width: 12rem


</style>
