<template>
  <div class="user-menu">
    <router-link v-show="!isUserLoggedIn" class="btn btn-primary" to="login">Log In</router-link>

    <div v-show="isUserLoggedIn" class="dropdown dropdown-right">
      <a href="#" class="btn btn-primary dropdown-toggle" tabindex="0">
        {{ name }} <i class="icon icon-caret"></i>
      </a>

      <ul class="menu">
        <li class="menu-item">
          <router-link to="dashboard">Dashboard</router-link>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  name: 'UserMenu',
  computed: {
    name () {
      return this.$store.state.accountModule.name
    },
    isUserLoggedIn () {
      return this.$store.state.accountModule.loggedIn
    }
  }
}
</script>
