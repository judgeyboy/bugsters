<template>
  <form v-on:submit="submit">
    <legend>Login</legend>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" v-model="password">
    <input type="submit" value="Login">
  </form>
</template>

<script>
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
      alert('Logging into Bugsters')
    }
  }
}
</script>
