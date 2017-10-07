<template>
  <form v-on:submit="submit">
    <legend>Login</legend>
    <input type="text" placeholder="Username" v-model="username">
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
      username: '',
      password: ''
    }
  },
  methods: {
    submit: function (submitEvent) {
      submitEvent.preventDefault()

      const loginDetails = {
        name: this.username,
        password: this.password
      }

      axios
        .post('https://bugsters-api.herokuapp.com/api/users/login', loginDetails, { headers: { 'Content-Type': 'application/json' } })
        .then(response => console.log(response))
        .catch(error => console.error(error))
    }
  }
}
</script>
