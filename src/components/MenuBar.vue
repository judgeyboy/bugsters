<template>
  <div class="menu-bar">
    <div class="menu-bar__company">
      <span>
        <router-link to="/">BUGSTERS</router-link>
      </span>
    </div>
    <div class="menu-bar__dashboard">
      <span>DASHBOARD</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar'
}
</script>

<style lang="sass" scoped>
.menu-bar
  height: 50px
  display: flex
  justify-content: space-between
  background-color: $background-grey
  padding: 40px 100px 60px 100px

  &__company
    display: flex
    align-items: center

    span
      font-size: 24px
      font-weight: 100

  &__dashboard
    display: flex
    align-items: center

    span
      font-size: 24px
      font-weight: 100

</style>
