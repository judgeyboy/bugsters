<template>
  <form @submit="submit">
    <legend>Login</legend>
    <input type="text" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <input type="submit" value="Login">
  </form>
</template>

<script>
export default {

  name: 'LoginForm',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    submit: function (submitEvent) {
      submitEvent.preventDefault()

      const loginDetails = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('login', loginDetails)
    }
  }

}
</script>
