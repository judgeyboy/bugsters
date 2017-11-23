<template>
  <div class="logout">
    <a href="#" @click="logout">Logout</a>
  </div>
</template>

<script>
export default {

  name: 'Logout',

  methods: {
    logout: function () {
      this.$store.dispatch('logout')
    }
  }

}
</script>
