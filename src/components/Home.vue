<template>

  <div class="off-canvas">

    <MenuBar :hasSideBar="true">
      <a slot="menu" class="off-canvas-toggle btn btn-link btn-action" @click="toggleSidebar">
        <i class="icon icon-menu"></i>
      </a>
    </MenuBar>

    <SideBar :showSidebar="showSidebar">
      <ScrollMenu>
        <ScrollMenuItem location="about">ABOUT US</ScrollMenuItem>
        <ScrollMenuItem location="how">HOW</ScrollMenuItem>
        <ScrollMenuItem location="order">TRY US</ScrollMenuItem>
        <ScrollMenuItem location="contact">CONTACT</ScrollMenuItem>
      </ScrollMenu>
    </SideBar>

    <a class="off-canvas-overlay" @click="toggleSidebar"></a>

    <div class="off-canvas-content bugster-content">
      <HeaderSection />
      <div class="container">
        <AboutSection id="about" />
        <HowSection id="how" />
        <OrderSection id="order" />
        <ContactSection id="contact" />
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import HeaderSection from './HeaderSection'
import AboutSection from './AboutSection'
import HowSection from './HowSection'
import ContactSection from '@/containers/ContactSection'
import OrderSection from '@/containers/OrderSection'
import MenuBar from './MenuBar'
import SideBar from './SideBar'
import FooterSection from './FooterSection'
import ScrollMenu from './ScrollMenu'
import ScrollMenuItem from './ScrollMenuItem'

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
    MenuBar,
    SideBar,
    FooterSection,
    ScrollMenu,
    ScrollMenuItem
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
  padding-left: 0.4rem
  margin: 3.8rem 0 0 0
</style>
