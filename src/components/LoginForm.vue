<template>
  <form v-on:submit="submit">
    <legend>Login</legend>
    <input type="text" placeholder="email" v-model="email">
    <input type="password" v-model="password">
    <input type="submit" value="Login">
  </form>
</template>

<script>

import axios from 'axios'

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

      axios
        .post('https://bugsters-api.herokuapp.com/account/login', loginDetails, { headers: { 'Content-Type': 'application/json' } })
        .then(response => console.log(response))
        .catch(error => console.error(error))
    }
  }
}
</script>
