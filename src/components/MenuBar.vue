<template>
  <div class="bugster-menubar" :class="{'responsive': hasSideBar}">
    <div class="bugster-menubar__menu">
      <slot name="menu"></slot>
    </div>

    <div class="bugster-menubar__link">
      <UserMenu />
    </div>
  </div>
</template>

<script>
import UserMenu from './UserMenu'

export default {
  name: 'MenuBar',
  props: {
    hasSideBar: {
      required: false,
      default: false
    }
  },
  components: {
    UserMenu
  }
}
</script>

<style lang="sass" scoped>
.responsive
  left: 12rem

.bugster-menubar
  height: 3.8rem
  position: fixed
  display: block
  right: 0
  left: 0
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

  a
    left: 0
    top: 0

@media (max-width: 960px)

  .bugster-menubar
    left: 0

</style>
