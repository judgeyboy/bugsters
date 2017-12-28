<template>
  <div class="bugster-navbar">
    <div class="bugster-navbar__menu">
      <a class="off-canvas-toggle btn btn-link btn-action" @click="$emit('toggleSidebar')">
        <i class="icon icon-menu"></i>
      </a>
    </div>

    <div class="bugster-navbar__link">
      <router-link class="btn btn-primary" to="dashboard">Dashboard</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
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

  a
    left: 0
    top: 0

@media (max-width: 960px)

  .bugster-navbar
    left: 0

</style>
