<template>
  <div class="user-menu">
    <router-link v-show="!isUserLoggedIn" class="btn btn-primary" to="login">Log In</router-link>

    <div v-show="isUserLoggedIn" class="dropdown dropdown-right" :class="showMenu ? 'active': ''">
      <a class="btn btn-primary dropdown-toggle" @click="toggleMenu" tabindex="0">
        {{ name }} <i class="icon icon-caret"></i>
      </a>

      <ul class="bugster-menu menu">
        <li class="menu-item">
          <router-link to="dashboard">Dashboard</router-link>
        </li>
      </ul>
    </div>

    <a class="user-menu-overlay" :class="showMenu ? 'user-menu-overlay--active':''" @click="toggleMenu"></a>

  </div>

</template>

<script>
export default {
  name: 'UserMenu',
  data () {
    return {
      showMenu: false
    }
  },
  computed: {
    name () {
      return this.$store.state.accountModule.name
    },
    isUserLoggedIn () {
      return this.$store.state.accountModule.loggedIn
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="sass" scoped>
.bugster-menu
  z-index: 300

.user-menu-overlay
  background: rgba(69,77,93,.1)
  border-color: transparent
  border-radius: 0
  bottom: 0
  display: none
  height: 100%
  left: 0
  position: fixed
  right: 0
  top: 0
  width: 100%

  &--active
    display: block
    z-index: 200
</style>
