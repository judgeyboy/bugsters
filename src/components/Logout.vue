<template>
  <div class="logout">
    <a href="#" @click="logout">Logout</a>
  </div>
</template>

<script>
import { ACCOUNT_LOGOUT } from '../store/actionTypes'

export default {

  name: 'Logout',

  methods: {
    logout: function () {
      this.$store.dispatch(ACCOUNT_LOGOUT)
    }
  }

}
</script>
