<template>
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

</template>

<script>
import ScrollLink from './ScrollLink'

export default {
  name: 'SideBar',
  props: ['showSidebar'],
  components: {
    ScrollLink
  }
}
</script>

<style lang="sass" scoped>
.off-canvas-sidebar
  width: 12rem

.bugster-sidebar
  bottom: 1.5rem
  -webkit-overflow-scrolling: touch
  overflow-y: auto
  padding: .5rem 1.5rem
  position: fixed
  top: 3.5rem
  width: 12rem
</style>
