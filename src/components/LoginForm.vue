<template>
  <div class="login-form">
    <form @submit.prevent="onSubmit">
      <legend>Login</legend>
      <input type="text" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <input type="submit" value="Login">
    </form>
    <div v-show="loginFailed" class="error-message">
      <span>Username or password does not exist!</span>
    </div>
  </div>

</template>

<script>
export default {

  name: 'LoginForm',

  data () {
    return {
      email: '',
      password: '',
      loginFailed: false
    }
  },

  props: ['returnUrl'],

  methods: {
    onSubmit: function () {
      const loginDetails = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('login', loginDetails)
        .then(() => {
          if (this.returnUrl) {
            this.$router.push({ path: this.returnUrl })
          }
        })
        .catch(() => {
          this.loginFailed = true
        })
    }
  }

}
</script>
