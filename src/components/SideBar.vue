<template>
  <div class="off-canvas-sidebar" :class="showSidebar ? 'active': ''">
    <div class="bugster-sidebar">
      <ul class="nav">
        <li class="nav-item">
          <a v-section-scroll location="about" >ABOUT US</a>
        </li>
        <li class="nav-item">
          <a v-section-scroll location="how">HOW</a>
        </li>
        <li class="nav-item">
          <a v-section-scroll location="order">TRY US</a>
        </li>
        <li class="nav-item">
          <a v-section-scroll location="contact">CONTACT</a>
        </li>
      </ul>
      <div class="bugster-sidebar__language">
        <LanguageSwitcher />
      </div>
    </div>
  </div>

</template>

<script>
import LanguageSwitcher from './LanguageSwitcher'

export default {
  name: 'SideBar',
  props: ['showSidebar'],
  components: {
    LanguageSwitcher
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

  &__language
    position: fixed
    bottom: 3.8rem
</style>
